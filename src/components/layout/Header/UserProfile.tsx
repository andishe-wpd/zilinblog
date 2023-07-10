import { FC, useState } from 'react'
import LoginModal from '@components/login/LoginModal'
import profileStore from '../../../store/profileStore'
import Button from '@components/button/Button'
const UserProfile: FC<{ className?: string }> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { avatar, authenticated } = profileStore(state => state)
  return (
    <div className={`cursor-pointer ${className}`}>
      {authenticated ? (
        <div
          className={`cursor-pointer ${className}`}
          onClick={() => setIsOpen(true)}
        >
          <img width={40} className="rounded-full" src={avatar} />
        </div>
      ) : (
        <Button title={'Login'} onClickAction={() => setIsOpen(true)} />
      )}
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default UserProfile
