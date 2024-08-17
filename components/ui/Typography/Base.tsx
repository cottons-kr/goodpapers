import { createElement } from 'react'
import { BaseProps, TypographyTag, TypographyVariant } from './shared'
import classNames from 'classnames'

import s from './style.module.scss'

type BaseTypographyProps = BaseProps & {
  variant: TypographyVariant
}
export function BaseTypography(props: BaseTypographyProps) {
  const { variant, weight, size, color } = props
  const tag = TypographyTag[variant]

  return createElement(
    tag,
    {
      children: props.children,
      style: {
        color: color ?
          `var(${color})` :
          undefined
      },
      className: classNames(
        s[variant],
        weight && s[weight],
        size && s[size],
        props.className,
      ),
    }
  )
}
