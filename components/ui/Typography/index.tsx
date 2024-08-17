import { BaseTypography } from './Base'
import { BaseProps, TypographyVariant } from './shared'

function Text(props: BaseProps) {
  return <BaseTypography {...props} variant={TypographyVariant.TEXT} />
}

const Typography = {
  Text,
} as const

export default Typography
