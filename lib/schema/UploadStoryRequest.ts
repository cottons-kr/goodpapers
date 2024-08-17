import { z } from 'zod'

export class UploadStoryRequest {
  images: File
  title: string
  content: string
}

export const uploadStoryRequestSchema = z.object({
  images: z.instanceof(File),
  title: z.string(),
  content: z.string(),
})
