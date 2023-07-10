import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import APIClient from '../services/api-client'

type AuthResponse = {
  authenticated: boolean
  token: string
  message: string
  name: string
  avatar: string
}

const apiClient = new APIClient<AuthResponse>('/user')

interface UseUserProps {
  token: string
}

const useTokenValidator = ({ token }: UseUserProps) =>
  useQuery(
    ['user', token],
    () => {
      if (token === '') {
        return Promise.resolve({
          authenticated: false,
          token: '',
          message: '',
          name: '',
          avatar: '',
        })
      }
      return apiClient.getToken(token)
    },
  )

export default useTokenValidator
