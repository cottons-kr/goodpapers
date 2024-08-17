'use client'

import { IButtonProps } from './shared'
import classNames from 'classnames'
import { ButtonVariant } from './shared'
import { ButtonSize } from './shared'
import Typo from '../Typography'

import s from './style.module.scss'
import { ColorPalette } from '@/lib/colors'
import { TypographySize, TypographyWeight } from '../Typography/shared'

export default function Button(props: IButtonProps) {
  const { variant, size, fullWidth, children, ...rest } = props

  const color = variant === ButtonVariant.PRIMARY ?
    ColorPalette.White :
    ColorPalette.Gray700

  return <>
    <button
      {...rest}
      className={classNames(
        s.button,
        s[variant || ButtonVariant.DEFAULT],
        s[size || ButtonSize.SMALL],
        { [s['full-width']]: fullWidth }
      )}
    >
      <Typo.Text
        size={TypographySize.SMALL}
        weight={size === ButtonSize.LARGE ? TypographyWeight.BOLD : TypographyWeight.MEDIUM}
        color={color}
      >
        {children}
      </Typo.Text>
    </button>
  </>
}
