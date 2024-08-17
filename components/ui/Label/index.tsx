import { ReactElement, ReactNode, cloneElement } from 'react'
import classNames from 'classnames'
import React from 'react'
import Typo from '../Typography'
import { TypographySize } from '../Typography/shared'
import { ColorPalette } from '@/lib/colors'

import s from './style.module.scss'

interface LabelProps {
  htmlFor?: string
  text?: string
  essential?: boolean
  key?: string
  className?: string
  children?: ReactNode
}
export function Label(props: LabelProps) {
  const { htmlFor, text, essential, className, children } = props

  const enhancedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && essential) {
      return cloneElement(child as ReactElement<HTMLInputElement>, { required: true })
    }
    return child
  })

  return <>
    <label className={classNames(s.label, className)} htmlFor={htmlFor}>
      <Typo.Text
        color={ColorPalette.Black}
        size={TypographySize.EXTRASMALL}
        className={classNames(s.text, essential && s.essential)}
      >{
        text || (typeof children === 'string' ? children : '')
      }</Typo.Text>
      {enhancedChildren}
    </label>
  </>
}
