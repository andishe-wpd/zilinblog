import Button from '@components/button/Button'
import BrandIcon from '@assets/icons/BrandIcon'
import { NAVBARITEMS } from '../../../constant/NAVBARITEMS'
import HamburgerIcon from '@assets/icons/HamburgerIcon'
const Navbar = () => {
  return (
    <div className="flex gap-4 items-center justify-between flex-wrap w-full sm:w-auto my-4 sm:my-auto">
      <BrandIcon />
      <div className="hidden sm:flex">
        {NAVBARITEMS.map(itm => (
          <Button title={itm} key={itm} />
        ))}
      </div>
      <div className="block sm:hidden">
        <HamburgerIcon />
      </div>
    </div>
  )
}

export default Navbar
