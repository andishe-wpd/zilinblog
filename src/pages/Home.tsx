import PostCards from '@components/PostCards/PostCards'
import { useParams, useNavigate } from 'react-router-dom'
import Modal from '@components/modal/Modal'
const Home = () => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <>
      <PostCards />
    </>
  )
}

export default Home
