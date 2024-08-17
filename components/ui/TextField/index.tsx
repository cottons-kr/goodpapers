import { InputHTMLAttributes } from 'react'

import s from './style.module.scss'

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiline?: boolean
}
export default function TextField(props: ITextFieldProps) {
  const { multiline, ...rest } = props

  return multiline ?
    <textarea {...rest} className={s.textarea} /> :
    <input {...rest} className={s.input} />
}
