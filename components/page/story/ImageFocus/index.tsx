'use client'

import { motion, Variants } from 'framer-motion'
import Close from '@/public/icons/close.svg'
import Image from 'next/image'

import s from './style.module.scss'

type StoryImageFocusProps = {
  src: string
  unfocus: () => void
}
export default function StoryImageFocus(props: StoryImageFocusProps) {
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }
  const closeVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return <>
    <motion.div
      className={s.backdrop}
      initial='hidden' animate='visible' exit='hidden'
      variants={backdropVariants}
      onClick={props.unfocus}
    >
      <motion.img
        src={props.src} className={s.image} alt='이미지'
        initial='hidden' animate='visible' exit='hidden'
        variants={imageVariants}
      />
      <motion.div
        className={s.close} onClick={props.unfocus}
        initial='hidden' animate='visible' exit='hidden'
        variants={closeVariants}
      >
        <Image src={Close} alt='닫기' />
      </motion.div>
    </motion.div>
  </>
}
