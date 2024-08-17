'use client'

import { BaseProps, TypographyVariant } from './shared'
import classNames from 'classnames'
import { motion } from 'framer-motion'

import s from './style.module.scss'

type BaseTypographyProps = BaseProps & {
  variant: TypographyVariant
}
export function BaseTypography(props: BaseTypographyProps) {
  const { variant, weight, size, color } = props

  return <motion.p
    children={props.children}
    style={{
      color: color ?
        `var(${color})` :
        undefined
    }}
    className={classNames(
      s[variant],
      weight && s[weight],
      size && s[size],
      props.className,
    )}
  />
}
