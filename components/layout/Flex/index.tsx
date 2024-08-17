import { CSSProperties, ReactNode, createElement } from 'react'
import { FlexItem } from './Item'

interface IProps {
  direction?: 'row' | 'column'
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: number
  width?: string
  maxwidth?: string
  height?: string
  tag?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}
function Flex(props: IProps) {
  const { direction, justify, align, gap, width, maxwidth, height, tag, className, style, children } = props

  return createElement(
    tag || 'div',
    {
      className,
      style: {
        ...style,
        width: width || '100%',
        maxWidth: maxwidth,
        height: height,
        display: 'flex',
        flexDirection: direction || 'row',
        justifyContent: justify || 'flex-start',
        alignItems: align || 'flex-start',
        flexWrap: props.wrap || 'nowrap',
        gap: `${gap || 0}px`
      }
    },
    children
  )
}

Flex.Item = FlexItem

export default Flex
export type { IProps as IFlexProps }
