import { Post } from './Post'


export interface PostResponse {
  totalPage: number
  currentPage: number
  content: Post[]
}
