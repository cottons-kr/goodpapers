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

import s from './style.module.scss'

export function StoryCommentPanelItem() {
  return <>
    <Flex className={s.item} direction='column' gap={NumberPreset[8]}>
      <Flex direction='column' gap={NumberPreset[4]}>
        <Typography.Text
          color={ColorPalette.Gray600}
          size={TypographySize.TINY}
        >
          홍길동
        </Typography.Text>
        <Typography.Text size={TypographySize.MEDIUM}>
          응원의 메세지 내용
        </Typography.Text>
      </Flex>
      <Flex align='center' gap={NumberPreset[16]}>
        <Flex align='center' gap={NumberPreset[4]} width='fit-content'>
          <Image src={Favorite} alt='좋아요' />
          <Typography.Text
            color={ColorPalette.Peach}
            size={TypographySize.TINY}
          >
            {182}
          </Typography.Text>
        </Flex>
        <Image src={Warning} alt='신고' />
      </Flex>
    </Flex>
  </>
}
