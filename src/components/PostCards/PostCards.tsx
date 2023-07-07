import PostCard from './PostCard'
import Modal from '@components/modal/Modal'
import { useNavigate, useParams } from 'react-router-dom'
import PostCardDetail from './PostCardDetail'
const PostCards = () => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 pb-12 max-w-[1600px] mx-auto">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <Modal
        isOpen={!!params?.postID}
        onClose={() => navigate('/' + params?.page)}
      >
        <PostCardDetail />
      </Modal>
    </div>
  )
}

export default PostCards
