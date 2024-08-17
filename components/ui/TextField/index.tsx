import { InputHTMLAttributes } from 'react'

import s from './style.module.scss'
import classNames from 'classnames'

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiline?: boolean
}
export default function TextField(props: ITextFieldProps) {
  const { multiline, ...rest } = props

  return multiline ?
    <textarea {...rest} className={classNames(s.textarea, props.className)} /> :
    <input {...rest} className={classNames(s.input, props.className)} />
}
