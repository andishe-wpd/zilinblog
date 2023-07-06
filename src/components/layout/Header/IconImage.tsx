import avatarPng from '@assets/pictures/Avatar.png'
import { FC } from 'react'
const IconImage: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <img src={avatarPng} />
    </div>
  )
}

export default IconImage
