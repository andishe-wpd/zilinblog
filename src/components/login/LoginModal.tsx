import Modal from '@components/modal/Modal'
import LoginForm from './LoginForm'
import { FC } from 'react'
import profileStore from '../../store/profileStore'
import UserCard from './UserCard'
const LoginModal: FC<{ isOpen: boolean; setIsOpen: (e: boolean) => void }> = ({
  isOpen,
  setIsOpen,
}) => {
  const { authenticated, avatar } = profileStore(state => state)

  console.log(avatar)
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {authenticated ? (
        <UserCard onClose={() => setIsOpen(false)} />
      ) : (
        <LoginForm onClose={() => setIsOpen(false)} />
      )}
    </Modal>
  )
}

export default LoginModal
