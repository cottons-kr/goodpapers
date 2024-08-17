'use server'

import { validateFormDataAndParse } from '@/utils/validator'
import { uploadCommentRequestSchema } from '../schema/UploadCommentRequest'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/utils/prisma'
import { auth } from '@/utils/auth'

export async function uploadComment(formData: FormData) {
  const data = validateFormDataAndParse(formData, uploadCommentRequestSchema)
  const session = await auth()
  if (
    !session?.user ||
    !session.user.email ||
    !session.user.name
  ) {
    throw new Error('로그인이 필요합니다.')
  }

  await prisma.comment.create({
    data: {
      commenterName: session.user.name,
      commenterEmail: session.user.email,
      content: data.content,
      story: {
        connect: { id: data.storyId }
      }
    }
  })

  revalidatePath('/story')
}

export async function likeComment(commentId: string) {
  const session = await auth()
  if (
    !session?.user ||
    !session.user.email ||
    !session.user.name
  ) {
    throw new Error('로그인이 필요합니다.')
  }
  
  const comment = await prisma.comment.findUnique({
    where: { id: commentId }
  })
  if (!comment) {
    throw new Error('댓글을 찾을 수 없습니다.')
  }

  await prisma.like.create({
    data: {
      likerEmail: session.user.email,
      comment: {
        connect: { id: commentId }
      }
    }
  })

  revalidatePath('/story')
}
