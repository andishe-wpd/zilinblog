import { FC } from 'react'
import { navBarItems } from '../../../constants/navBarItems'
import BrandIcon from '@assets/icons/BrandIcon'
import { useNavigate } from 'react-router-dom'
import IconImage from './IconImage'
import { SideMenuProps } from '@interfaces/SideMenuProps'
import { NavbarItem } from '@interfaces/NavbarItem'

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className={`backdrop  backdrop-blur-[5px] z-40 ${
          isOpen ? 'isOpen' : 'isClosed'
        }`}
        onClick={onClose}
      />
      <aside
        className={`menu z-50 ${isOpen ? 'isOpen' : 'isClosed'} py-8 px-4`}
        onClick={onClose}
      >
        <div className="flex-wrap-between-center">
          <BrandIcon
            className="cursor-pointer py-2"
            onClick={() => navigate('/')}
          />
          <IconImage />
        </div>
        {navBarItems.map((item: NavbarItem) => (
          <a
            href={item.path}
            key={item.title}
            className="block px-4 py-2 text-black hover:bg-blue-50 transition-all"
          >
            {item.title}
          </a>
        ))}
      </aside>
    </>
  )
}

export default SideMenu
