import { FC } from 'react'

interface ButtonProps {
  title: string | number
  icon?: React.ReactNode
  className?: string
  isActive?: boolean
  onClickAction?: () => void
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  title,
  icon,
  className,
  isActive = false,
  onClickAction,
  disabled = false,
}) => {
  return (
    <div
      className={`custom-button ${className} ${
        isActive ? 'text-primary bg-blue-50' : null
      } ${disabled ? 'cursor-not-allowed' : null}`}
      onClick={() => {
        if (onClickAction) onClickAction()
      }}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {title}
    </div>
  )
}

export default Button
