import Button from '@components/button/Button'
import BrandIcon from '@assets/icons/BrandIcon'
import { NAVBARITEMS } from '../../../constant/NAVBARITEMS'
const Navbar = () => {
  return (
    <div className="flex gap-4 items-center">
      <BrandIcon />
      {NAVBARITEMS.map(itm => (
        <Button title={itm} key={itm} />
      ))}
    </div>
  )
}

export default Navbar
