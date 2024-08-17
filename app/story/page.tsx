import Flex from '@/components/layout/Flex'
import { StoryTopbar } from '@/components/page/story/Topbar'
import Typography from '@/components/ui/Typography'
import { TypographySize, TypographyWeight } from '@/components/ui/Typography/shared'
import { ColorPalette } from '@/lib/colors'
import { NumberPreset } from '@/lib/variables'
import StoryPhoto from '@/components/page/story/Photo'
import StoryCommentPanel from '@/components/page/story/CommentPanel'
import { redirect } from 'next/navigation'
import { prisma } from '@/utils/prisma'

import s from './style.module.scss'

export default async function StoryPage() {
  const selectedStory = await prisma.selectedStory.findFirst({
    orderBy: { createdAt: 'desc' },
    include: {
      story: {
        include: {
          comments: {
            include: {
              likes: true
            },
            orderBy: { createdAt: 'desc' },
          },
        }
      } 
    },
  })
  if (!selectedStory?.story) {
    redirect('/')
  }
  const { story } = selectedStory

  return <>
    <StoryCommentPanel storyId={story.id} comments={story.comments} />

    <Flex className={s.container} direction='column' gap={NumberPreset[30]}>
      <StoryTopbar />

      <Flex direction='column' gap={NumberPreset[16]}>
        <Typography.Display
          size={TypographySize.SMALL}
          weight={TypographyWeight.SEMIBOLD}
        >{story.title}</Typography.Display>
        <Typography.Text
          color={ColorPalette.Gray600}
          size={TypographySize.SMALL}
        >{story.uploaderName}</Typography.Text>
      </Flex>

      <pre className={s.content}>{story.content}</pre>

      <Flex direction='column' gap={NumberPreset[8]}>
        <Typography.Text
          color={ColorPalette.Gray700}
          size={TypographySize.SMALL}
        >
          사진
        </Typography.Text>
        <div className={s.photos}>{
          story.images.map((image, i) => (
            <StoryPhoto
              key={i} order={i + 1}
              src={`${process.env.MINIO_USE_SSL ? 'https' : 'http'}://${process.env.MINIO_ENDPOINT}/${process.env.MINIO_BUCKET_NAME}/${image}`}
            />
          ))
        }</div>
      </Flex>
    </Flex>
  </>
}
