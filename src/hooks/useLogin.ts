import { useMutation } from '@tanstack/react-query'
import APIClient from '../services/api-client'

const apiClient = new APIClient<AuthResponse>('/login')

const useLogin = () => {
  return useMutation(
    (data: { username: string; password: string }) => apiClient.post(data),
    {
      onSuccess: data => {
        if (data.authenticated) {
          // Save the token to localstorage
          localStorage.setItem('token', data.token)
        }
      },
    },
  )
}

export default useLogin

interface Credentials {
  username: string
  password: string
}

interface AuthResponse {
  authenticated: boolean
  token: string
  message: string
  name: string
  avatar: string
}

export interface Post {
  id?: string
  order?: number
  title: string
  summary: string
  mainContent: string
  image: string
  author: string
  date: Date
  jobTitle: string
}
