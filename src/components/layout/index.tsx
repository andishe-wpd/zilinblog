import { FC, ReactNode } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Breadcrumb from './Breadcrumb/Breadcrumb'
interface WrapperProps {
  children: ReactNode
}

const Layout: FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mx-8">
        <Breadcrumb />
        <div className="min-h-[80vh]">{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
