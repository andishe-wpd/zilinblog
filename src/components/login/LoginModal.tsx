import Modal from '@components/modal/Modal'
import LoginForm from './LoginForm'
import { FC } from 'react'
const LoginModal: FC<{ isOpen: boolean; setIsOpen: (e: boolean) => void }> = ({
  isOpen,
  setIsOpen,
}) => {
  // const [isOpen, setIsOpen] = useState(true)
  return (
    <Modal
      className="bg-red-300"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <LoginForm onClose={() => setIsOpen(false)} />
    </Modal>
  )
}

export default LoginModal
