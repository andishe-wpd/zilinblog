import { FC } from 'react'

interface ButtonProps {
  title: string
  icon?: React.ReactNode
  className?: string
  isActive?: boolean
}

const Button: FC<ButtonProps> = ({
  title,
  icon,
  className,
  isActive = false,
}) => {
  return (
    <div
      className={`p-3 cursor-pointer font-medium text-secondary capitalize hover:bg-blue-50 rounded-md ${className} ${
        isActive ? 'text-primary bg-blue-50' : null
      }`}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {title}
    </div>
  )
}

export default Button
