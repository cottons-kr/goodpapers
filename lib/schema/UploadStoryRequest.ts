import { z } from 'zod'

export class UploadStoryRequest {
  images: File
  content: string
}

export const uploadStoryRequestSchema = z.object({
  images: z.instanceof(File),
  content: z.string(),
})
