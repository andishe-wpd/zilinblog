import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import { PostResponse } from '@interfaces/PostResponse'

const apiClient = new APIClient<PostResponse>('/posts')

const usePosts = (slug: string) =>
  useQuery({
    queryKey: ['posts', slug],
    queryFn: () => apiClient.get(slug),
    // staleTime: ms('24h'),
  })

export default usePosts
