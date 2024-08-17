import { ButtonHTMLAttributes } from 'react'

export enum ButtonVariant {
  DEFAULT,
  PRIMARY,
}

export enum ButtonSize {
  SMALL,
  LARGE,
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  children?: React.ReactNode
}
