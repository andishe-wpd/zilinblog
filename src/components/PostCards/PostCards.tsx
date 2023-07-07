import PostCard from './PostCard'
import Modal from '@components/modal/Modal'
import { useNavigate, useParams } from 'react-router-dom'
import PostCardDetail from './PostCardDetail'
import usePosts from '../../hooks/usePosts'
import { useEffect } from 'react'
const PostCards = () => {
  const navigate = useNavigate()
  const params = useParams()
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = usePosts(`?page=${params?.page || '1'}}`)
  useEffect(() => {
    refetch()
  }, [params])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 pb-12 max-w-[1600px] mx-auto">
      {posts?.content.map(
        ({
          id,
          title,
          picture,
          mainContent,
          summary,
          author,
          date,
          jobTitle,
        }) => (
          <PostCard
            title={title}
            key={id}
            picture={picture}
            mainContent={mainContent}
            summary={summary}
            author={author}
            date={date}
            jobTitle={jobTitle}
          />
        ),
      )}

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
