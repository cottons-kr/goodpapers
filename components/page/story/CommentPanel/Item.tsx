'use client'

import Flex from '@/components/layout/Flex'
import { NumberPreset } from '@/lib/variables'
import Typography from '@/components/ui/Typography'
import { ColorPalette } from '@/lib/colors'
import { TypographySize } from '@/components/ui/Typography/shared'
import Favorite from '@/public/icons/favorite.svg'
import FavoriteFill from '@/public/icons/favorite_fill.svg'
import Warning from '@/public/icons/warning.svg'
import Image from 'next/image'
import { Comment, Like } from '@prisma/client'

import s from './style.module.scss'

type StoryCommentPanelItemProps = {
  commnet: Comment & { likes: Like[] }
}
export function StoryCommentPanelItem(props: StoryCommentPanelItemProps) {
  return <>
    <Flex className={s.item} direction='column' gap={NumberPreset[8]}>
      <Flex direction='column' gap={NumberPreset[4]}>
        <Typography.Text
          color={ColorPalette.Gray600}
          size={TypographySize.TINY}
        >
          {props.commnet.commenterName}
        </Typography.Text>
        <Typography.Text size={TypographySize.MEDIUM}>
          {props.commnet.content}
        </Typography.Text>
      </Flex>
      <Flex align='center' gap={NumberPreset[16]}>
        <Flex align='center' gap={NumberPreset[4]} width='fit-content'>
          <Image src={Favorite} alt='좋아요' />
          <Typography.Text
            color={ColorPalette.Peach}
            size={TypographySize.TINY}
          >
            {props.commnet.likes.length}
          </Typography.Text>
        </Flex>
        <Image src={Warning} alt='신고' />
      </Flex>
    </Flex>
  </>
}
