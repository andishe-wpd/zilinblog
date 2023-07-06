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
  const menuClasses = isOpen
    ? 'fixed top-0 right-0 w-64 h-full bg-white transform translate-x-0 transition-transform duration-300 ease-in-out'
    : 'fixed top-0 right-0 w-64 h-full bg-white transform translate-x-full transition-transform duration-300 ease-in-out'
  const backdropClasses = isOpen
    ? 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out'
    : 'fixed top-0 left-0  bg-black bg-opacity-0 transition-opacity duration-300 ease-in-out '

  return (
    <>
      <div
        className={backdropClasses}
        onClick={onClose}
        style={{ backdropFilter: 'blur(5px)' }}
      ></div>
      <div className={`${menuClasses} py-8 px-4`} onClick={onClose}>
        <div className="flex flex-wrap justify-between items-center">
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
