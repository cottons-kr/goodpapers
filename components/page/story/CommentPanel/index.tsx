'use client'

import { useState } from 'react'
import classNames from 'classnames'
import Flex from '@/components/layout/Flex'
import { NumberPreset } from '@/lib/variables'
import Typography from '@/components/ui/Typography'
import { ColorPalette } from '@/lib/colors'
import { TypographySize, TypographyWeight } from '@/components/ui/Typography/shared'
import KeyboardArrowUp from '@/public/icons/keyboard_arrow_up.svg'
import Image from 'next/image'
import TextField from '@/components/ui/TextField'
import Button from '@/components/ui/Button'
import { ButtonVariant } from '@/components/ui/Button/shared'
import Form from '@/components/ui/Form'
import { StoryCommentPanelItem } from './Item'
import { Comment, Like } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { uploadComment } from '@/lib/actions/comment'

import s from './style.module.scss'

type StoryCommentPanelProps = {
  storyId: string
  comments: (Comment & { likes: Like[] })[]
}
export default function StoryCommentPanel(props: StoryCommentPanelProps) {
  const [isOpened, setIsOpened] = useState(false)
  const session = useSession()

  return <>
    <div className={classNames(s.backdrop, isOpened && s.show)} onClick={() => setIsOpened(false)} />

    <div className={classNames(s.container, isOpened && s.opened)}>
      <Flex align='center' justify='space-between'>
        <Flex align='center' gap={NumberPreset[14]}>
          <Typography.Text
            color={ColorPalette.Gray600}
            size={TypographySize.SMALL}
          >
            댓글
          </Typography.Text>
          <Typography.Text
            color={ColorPalette.Peach}
            size={TypographySize.MEDIUM}
            weight={TypographyWeight.SEMIBOLD}
          >
            {props.comments.length}개
          </Typography.Text>
        </Flex>
        <div className={s.trigger} onClick={() => setIsOpened(prev => !prev)}>
          <Image src={KeyboardArrowUp} alt='화살표' />
        </div>
      </Flex>

      <Form className={s.upload} action={uploadComment} gap={NumberPreset[8]}>
        <Typography.Text size={TypographySize.SMALL}>{
          session.data?.user?.name
        }</Typography.Text>
        <TextField
          className={s.textfield} multiline
          placeholder='따뜻한 응원의 메세지를 적어주세요'
          name='content'
        />
        <input type='hidden' name='storyId' value={props.storyId} />
        <Flex align='center' justify='space-between'>
          <Typography.Text
            color={ColorPalette.Gray500}
            size={TypographySize.EXTRASMALL}
          >
            어떻게 써야 하나요?
          </Typography.Text>
          <Button variant={ButtonVariant.PRIMARY}>올리기</Button>
        </Flex>
      </Form>

      <Flex direction='column' gap={NumberPreset[8]}>
        <Typography.Text
          color={ColorPalette.Peach}
          size={TypographySize.SMALL}
          weight={TypographyWeight.SEMIBOLD}
        >
          {props.comments.length}명의 사람들이 응원했어요
        </Typography.Text>
        <Flex direction='column' gap={NumberPreset[16]}>{
          props.comments.map((comment) => (
            <StoryCommentPanelItem key={comment.id} commnet={comment} />
          ))
        }</Flex>
      </Flex>
    </div>
  </>
}
