import { FC, ReactNode } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

interface LinkProps extends RouterLinkProps {
  className?: string
  children: ReactNode
}

const Link: FC<LinkProps> = ({ className, children, ...rest }) => {
  return (
    <RouterLink className={className} {...rest}>
      {children}
    </RouterLink>
  )
}

export default Link
