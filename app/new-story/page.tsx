'use client'

import Flex from '@/components/layout/Flex'
import { NumberPreset } from '@/lib/variables'
import Typography from '@/components/ui/Typography'
import { TypographySize, TypographyWeight } from '@/components/ui/Typography/shared'
import { ColorPalette } from '@/lib/colors'
import { NewStoryUploadImages } from '@/components/page/new-story/UploadImages'
import { Label } from '@/components/ui/Label'
import TextField from '@/components/ui/TextField'
import Button from '@/components/ui/Button'
import { ButtonSize, ButtonVariant } from '@/components/ui/Button/shared'
import Form from '@/components/ui/Form'
import { uploadStory } from '@/lib/actions/story'

import s from './page.module.scss'

export default function NewStoryPage() {
  return <>
    <Form className={s.form} action={async formData => {
      try {
        await uploadStory(formData)
      } catch (err) {
        console.error(err)
        alert('사연을 올리는 중에 오류가 발생했습니다.')
      }
    }} gap={NumberPreset[30]}>
      <Flex className={s.title} direction='column' gap={NumberPreset[8]}>
        <Typography.Display
          size={TypographySize.SMALL}
          weight={TypographyWeight.SEMIBOLD}
        >
          사연 작성하기
        </Typography.Display>
        <Typography.Text
          color={ColorPalette.Gray500}
          size={TypographySize.SMALL}
        >
          따뜻한 사람들에게 공유하고 싶은 내용을 적어주세요.
        </Typography.Text>
      </Flex>

      <NewStoryUploadImages />

      <Label className={s.textfield} text='내용' essential>
        <TextField name='content' multiline />
      </Label>

      <Button
        fullWidth
        variant={ButtonVariant.PRIMARY}
        size={ButtonSize.LARGE}
      >올리기</Button>
    </Form>
  </>
}
