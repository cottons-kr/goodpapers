'use server'

import { validateFormDataAndParse } from '@/utils/validator'
import { redirect } from 'next/navigation'
import { uploadStoryRequestSchema } from '../schema/UploadStoryRequest'
import { saveFile } from '@/utils/file'
import { auth } from '@/utils/auth'
import { prisma } from '@/utils/prisma'

export async function uploadStory(formData: FormData) {
  const data = validateFormDataAndParse(formData, uploadStoryRequestSchema)
  const session = await auth()
  if (
    !session?.user ||
    !session.user.email ||
    !session.user.name
  ) {
    throw new Error('로그인이 필요합니다.')
  }

  const imageUrl = await saveFile(data.images)
  await prisma.story.create({
    data: {
      uploaderName: session.user.name,
      uploaderEmail: session.user.email,
      title: data.title,
      content: data.content,
      images: [imageUrl],
    },
  })

  redirect('/new-story/complete')
}
