import { z } from 'zod'

export class UploadCommentRequest {
  content: string
  storyId: string
}

export const uploadCommentRequestSchema = z.object({
  content: z.string(),
  storyId: z.string().uuid(),
})
