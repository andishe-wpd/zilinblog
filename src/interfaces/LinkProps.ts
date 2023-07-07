import { ReactNode } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

export interface LinkProps extends RouterLinkProps {
  className?: string
  children: ReactNode
}
