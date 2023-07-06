import BrandIcon from '@assets/icons/BrandIcon'
import HamburgerIcon from '@assets/icons/HamburgerIcon'
import Button from '@components/button/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NAVBARITEMS } from '../../../constant/NAVBARITEMS'
import SideMenu from './SideMenu '
const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const navigate = useNavigate()
  const handleHamburgerClick = () => {
    setIsSideMenuOpen(!isSideMenuOpen)
  }
  return (
    <div className="flex-wrap-between-center gap-4 w-full sm:w-auto my-4 sm:my-auto">
      <div className="cursor-pointer" onClick={() => navigate('/')}>
        <BrandIcon />
      </div>
      <div className="hidden sm:flex">
        {NAVBARITEMS.map(itm => (
          <Button
            title={itm.title}
            key={itm.title}
            onClickAction={() => navigate(itm.path)}
          />
        ))}
      </div>
      <div
        className="block sm:hidden cursor-pointer"
        onClick={handleHamburgerClick}
      >
        <HamburgerIcon />
      </div>
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
    </div>
  )
}

export default Navbar
