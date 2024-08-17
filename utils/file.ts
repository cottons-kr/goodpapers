import * as Minio from 'minio'
import { getEnv } from './env'

const minioClient = new Minio.Client(getMinioAuthInfo())

function getEnvAboutMinio() {
  type MinioEnvKeys = 'MINIO_ACCESS_KEY' | 'MINIO_SECRET_KEY' | 'MINIO_USE_SSL' | 'MINIO_BUCKET_NAME' | 'MINIO_ENDPOINT' | 'MINIO_PORT'
  const keys: MinioEnvKeys[] = ['MINIO_ACCESS_KEY', 'MINIO_SECRET_KEY', 'MINIO_USE_SSL', 'MINIO_BUCKET_NAME', 'MINIO_ENDPOINT']
  return keys.reduce((acc, key) => {
    let value = getEnv(key)

    switch (key) {
      case 'MINIO_ENDPOINT': {
        if (value.includes(':')) {
          const [endpoint, port] = value.split(':')
          value = endpoint
          acc.MINIO_PORT = port
        }
      }
    }

    acc[key] = value
    return acc
  }, {} as Record<MinioEnvKeys, string>)
}

function getMinioAuthInfo() {
  const {
    MINIO_ACCESS_KEY: accessKey,
    MINIO_SECRET_KEY: secretKey,
    MINIO_USE_SSL,
    MINIO_ENDPOINT,
    MINIO_PORT,
  } = getEnvAboutMinio()

  const useSSL = MINIO_USE_SSL === 'true'

  return {
    endPoint: MINIO_ENDPOINT,
    port: MINIO_PORT ? Number(MINIO_PORT) : undefined,
    accessKey, secretKey, useSSL,
  } as const
}

export async function saveFile(file: File) {
  const { MINIO_BUCKET_NAME } = getEnvAboutMinio()

  const name = Math.random().toString(36).substring(2)
  const extension = file.name.split('.').pop()

  const buffer = Buffer.from(await file.arrayBuffer())
  await minioClient.putObject(MINIO_BUCKET_NAME, `${name}.${extension}`, buffer)

  return `${name}.${extension}`
}

export async function deleteFile(filename: string) {
  const {
    MINIO_BUCKET_NAME,
    MINIO_ENDPOINT
  } = getEnvAboutMinio()

  const path = filename.replace(`${MINIO_ENDPOINT}/`, '')
  const deleted = await minioClient.removeObject(MINIO_BUCKET_NAME, path)

  return deleted
}

export async function getFileUrl(filename: string) {
  const {
    MINIO_BUCKET_NAME,
    MINIO_USE_SSL, 
  } = getEnvAboutMinio()

  const useSSL = MINIO_USE_SSL === 'true'
  const url = await minioClient.presignedGetObject(MINIO_BUCKET_NAME, filename)

  return useSSL ? url.replace('http', 'https') : url
}
