import { ReactNode } from 'react'

export interface CustomInputProps {
  icon?: ReactNode
  placeholder?: string
  onEnter?: () => void
  className?: string
}
