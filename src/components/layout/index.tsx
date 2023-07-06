import { FC, ReactNode } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
interface WrapperProps {
  children: ReactNode
}

const Layout: FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='mx-8'>
        <div className="min-h-[80vh]">{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
