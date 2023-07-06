import React, { ReactNode, useRef } from 'react'

interface CustomInputProps {
  icon?: ReactNode
  placeholder?: string
  onEnter?: () => void
  className?: string
}
const CustomInput: React.FC<CustomInputProps> = ({
  icon,
  placeholder,
  onEnter,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onEnter) {
      console.log(inputRef?.current?.value)
    }
  }

  const handleDivClick = () => {
    // focus the input when the parent div is clicked
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div
      className={`border py-3 px-4 rounded-lg flex gap-2 cursor-pointer ${className} hover:border-black transition-all`}
      onClick={handleDivClick}
    >
      {icon && icon}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder={placeholder}
          className="focus:outline-none cursor-pointer"
        />
      </form>
    </div>
  )
}

export default CustomInput
