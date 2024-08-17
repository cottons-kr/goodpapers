/*
HTML name attribute에 prefix를 추가하여 value의 type을 설정할 수 있다.

- prefix가 없는 경우: string으로 처리된다.
- prefix가 있는 경우: prefix에 따라 type이 결정된다.
  - !s   (string):   string
  - !n   (number):   number
  - !sb  (boolean):  boolean (true, false)
  - !nb  (boolean):  boolean (1, 0)
  - !ob  (boolean):  boolean (on, off)
  - !d   (date):     Date

예)
!s_name은 무조건 string이다.
!n_age는 무조건 number이다.
!b_isAdult는 무조건 boolean이다.
!d_birthday는 무조건 Date이다.

prefix는 parsing 시에 제거된다.
*/

import { ZodObject, ZodRawShape, ZodTypeAny, z } from 'zod'

export const enum Prefix {
  String = 's',
  Number = 'n',
  StrictBoolean = 'sb',
  NumberBoolean = 'nb',
  OnOffBoolean = 'ob',
  Date = 'd',
}

const zodKeys = <T extends z.ZodTypeAny>(schema: T): string[] => {
  if (schema === null || schema === undefined) return []
  if (schema instanceof z.ZodNullable || schema instanceof z.ZodOptional) return zodKeys(schema.unwrap())
  if (schema instanceof z.ZodArray) return zodKeys(schema.element)
  if (schema instanceof z.ZodObject) {
    const entries = Object.entries(schema.shape)
    return entries.flatMap(([key, value]) => {
      const nested = value instanceof z.ZodType ? zodKeys(value).map(subKey => `${key}.${subKey}`) : []
      return nested.length ? nested : key
    })
  }
  return []
}

export function parseFormData(formData: FormData): Record<string, string | number | boolean | Date> {
  const data = Object.fromEntries(formData.entries())
  const removePrefix = (key: string) => key.startsWith('!') ? key.slice(3) : key

  return Object.fromEntries(Object.entries(data).map(([key, value]) => {
    if (typeof value !== 'string') {
      return [removePrefix(key), value]
    }

    if (key.startsWith('!')) { // prefix 존재
      const prefix = key.slice(1, 2)
      const realKey = removePrefix(key)
      switch (prefix) {
        case Prefix.String: return [realKey, value]
        case Prefix.Number: return [realKey, Number(value)]
        case Prefix.StrictBoolean: return [realKey, value === 'true']
        case Prefix.NumberBoolean: return [realKey, value === '1']
        case Prefix.OnOffBoolean: return [realKey, value === 'on']
        case Prefix.Date: return [realKey, new Date(value)]
        default: return [realKey, value]
      }
    } else { // prefix 미존재
      return [key, value]
    }
  }))
}

export function isValidData<T extends object>(data: unknown, schema: ZodObject<ZodRawShape, 'strip', ZodTypeAny, T>): data is T {
  const result = schema.safeParse(data)
  if (!result.success) {
    console.error(result.error.errors)
    throw new Error(result.error.errors.map(e => e.message).join(', '))
  }
  return true
}

export function validateFormDataAndParse<T extends object>(formData: FormData, schema: ZodObject<ZodRawShape, 'strip', ZodTypeAny, T>): T {
  const data = parseFormData(formData)
  const keys = zodKeys(schema)
  if (isValidData(data, schema)) {
    return keys.reduce((acc, key) => {
      const value = data[key]
      return { ...acc, [key]: value }
    }, {} as T)
  } else {
    throw new Error('Invalid data')
  }
}

export function typedName<T>(name: keyof T, prefix: Prefix = Prefix.String) {
  return `!${prefix}_${String(name)}` as const
}

export function dataToFormData<T extends object>(data: T): FormData {
  const formData = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    if (!value) return
    if (value instanceof Date) {
      formData.append(key, value.toISOString())
    } else {
      formData.append(key, String(value))
    }
  })
  return formData
}
