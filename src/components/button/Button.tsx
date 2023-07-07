import { FC } from 'react'
import { ButtonProps } from '@interfaces/ButtonProps'
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
      className={`custom-button p-3 ${className} ${
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
