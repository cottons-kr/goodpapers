'use client'

import Flex from '@/components/layout/Flex'
import { NumberPreset } from '@/lib/variables'
import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import AddPhotoAlternate from '@/public/icons/add_photo_alternate.svg'
import Typography from '@/components/ui/Typography'
import { TypographySize } from '@/components/ui/Typography/shared'
import { ColorPalette } from '@/lib/colors'

import s from './style.module.scss'

type UploadImageProps = {
  setFiles: Dispatch<SetStateAction<File[]>>
}
function UploadImage(props: UploadImageProps) {
  return <>
    <label className={s.upload}>
      <Image src={AddPhotoAlternate} alt='이미지 추가' />
      <Typography.Text
        color={ColorPalette.Gray700}
        size={TypographySize.TINY}
      >
        사진 업로드
      </Typography.Text>
      <input
        type='file' accept='image/*' multiple
        name='images'
        onChange={(e) => {
          const files = Array.from(e.target.files || [])
          props.setFiles(prev => ([...prev, ...files]))
        }}
      />
    </label>
  </>
}

type ImagePreviewProps = {
  src: string
}
function ImagePreview(props: ImagePreviewProps) {
  return <>
    <img className={s.preview} src={props.src} alt='이미지 미리보기' />
  </>
}

export function NewStoryUploadImages() {
  const [files, setFiles] = useState<File[]>([])

  return <>
    <Flex className={s.container} gap={NumberPreset[14]}>
      <UploadImage setFiles={setFiles} />
      {
        files.map((file, index) => (
          <ImagePreview key={index} src={URL.createObjectURL(file)} />
        ))
      }
    </Flex>
  </>
}
