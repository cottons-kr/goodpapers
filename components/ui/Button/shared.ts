import { ButtonHTMLAttributes } from 'react'

export enum ButtonVariant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
}

export enum ButtonSize {
  SMALL = 'small',
  LARGE = 'large',
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  children?: React.ReactNode
}
