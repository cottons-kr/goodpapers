import { BaseTypography } from './Base'
import { BaseProps, TypographyVariant } from './shared'

function Text(props: BaseProps) {
  return <BaseTypography {...props} variant={TypographyVariant.TEXT} />
}

function Display(props: BaseProps) {
  return <BaseTypography {...props} variant={TypographyVariant.DISPLAY} />
}

const Typography = {
  Text,
  Display,
} as const

export default Typography
