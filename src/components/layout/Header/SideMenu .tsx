import { FC } from 'react'
import { NAVBARITEMS } from '../../../constant/NAVBARITEMS'
import BrandIcon from '@assets/icons/BrandIcon'
import { useNavigate } from 'react-router-dom'
import IconImage from './IconImage'
interface NavbarItem {
  title: string
  path: string
}

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className={`backdrop ${isOpen ? 'isOpen' : 'isClosed'}`}
        onClick={onClose}
        style={{ backdropFilter: 'blur(5px)' }}
      />
      <div
        className={`menu ${isOpen ? 'isOpen' : 'isClosed'} py-8 px-4`}
        onClick={onClose}
      >
        <div className="flex-wrap-between-center">
          <div className="cursor-pointer py-2" onClick={() => navigate('/')}>
            <BrandIcon />
          </div>
          <IconImage />
        </div>
        {NAVBARITEMS.map((item: NavbarItem) => (
          <a
            href={item.path}
            key={item.title}
            className="block px-4 py-2 text-black hover:bg-blue-50 transition-all"
          >
            {item.title}
          </a>
        ))}
      </div>
    </>
  )
}

export default SideMenu
