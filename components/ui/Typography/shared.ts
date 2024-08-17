import { ReactNode } from 'react'
import { ColorPalette } from '@/lib/colors'

export const enum TypographyVariant {
  TEXT = 'text',
  DISPLAY = 'display',
}

export const enum TypographyWeight {
  BOLD = 'bold',
  SEMIBOLD = 'semibold',
  MEDIUM = 'medium',
}

export const enum TypographySize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  EXTRASMALL = 'extrasmall',
}

export const TypographyTag = {
  [TypographyVariant.TEXT]: 'p',
  [TypographyVariant.DISPLAY]: 'p',
} as const

export type BaseProps = {
  color?: ColorPalette
  size?: TypographySize
  weight?: TypographyWeight
  className?: string
  children: ReactNode
}
