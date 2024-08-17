'use client'

import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import StoryImageFocus from '../ImageFocus'

import s from './style.module.scss'

type StoryPhotoProps = {
  order: number
  src: string
}
export default function StoryPhoto(props: StoryPhotoProps) {
  const [isFocused, setIsFocused] = useState(false)

  function getCharacterType(n: number) {
    const pattern = ['big', 'small', 'small', 'big', 'big', 'small', 'small', 'big']
    const index = (n - 1) % pattern.length
    return pattern[index]
  }
  const size = getCharacterType(props.order)

  return <>
    <AnimatePresence>{
      isFocused && <StoryImageFocus src={props.src} unfocus={() => setIsFocused(false)} />
    }</AnimatePresence>
    <img
      className={classNames(s.photo, s[size])}
      src={props.src}
      alt={`사진 ${props.order}`}
      onClick={() => setIsFocused(true)}
    />
  </>
}
