import Navbar from '@components/layout/Header/Navbar'
import CustomInput from '@components/CustomInput/CustomInput'
import SearchIcon from '../../../assets/icons/SearchIcon'
import IconImage from '@components/layout/Header/IconImage'
const Header = () => {
  return (
    <div className="py-4 px-8 border-b flex flex-wrap justify-between">
      <Navbar />
      <div className="flex items-center gap-4 max-w-[720px] w-full flex-wrap">
        <CustomInput
          placeholder="search"
          icon={<SearchIcon />}
          className="max-w-[649px] w-full"
        />
        <IconImage className="hidden lg:block" />
      </div>
    </div>
  )
}

export default Header
