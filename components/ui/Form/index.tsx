import { ReactNode } from 'react'
import Flex from '@/components/layout/Flex'
import classNames from 'classnames'

import s from './style.module.scss'

type FormProps = {
  action?: (formData: FormData) => unknown
  gap?: number
  className?: string
  children?: ReactNode
}
export default function Form(props: FormProps) {
  return <>
    <form className={classNames(s.form, props.className)} action={props.action}>
      <Flex direction='column' gap={props.gap} height='100%'>
        {props.children}
      </Flex>
    </form>
  </>
}
