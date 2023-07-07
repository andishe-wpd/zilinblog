export interface ButtonProps {
  title?: string | number
  icon?: React.ReactNode
  className?: string
  isActive?: boolean
  onClickAction?: () => void
  disabled?: boolean
}
