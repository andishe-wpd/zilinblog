import React, { ChangeEvent, useRef } from 'react'
import { CustomInputProps } from '@interfaces/CustomInputProps'
import useStore from '../../store/store'
const SearchInput: React.FC<CustomInputProps> = ({
  icon,
  placeholder,
  onEnter,
  className,
}) => {
  const setSearchValue = useStore(state => state.setSearchValue)
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
    setSearchValue(searchValue)
  }

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
      className={`border py-3 px-4 rounded-lg flex gap-2 cursor-pointer hover:border-black transition-all ${className}`}
      onClick={handleDivClick}
    >
      {icon && icon}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder={placeholder}
          className="focus:outline-none cursor-pointer"
          onChange={handleSearchInputChange}
        />
      </form>
    </div>
  )
}

export default SearchInput
