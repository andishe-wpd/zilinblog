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

  const postIndex = params?.postID ? parseInt(params.postID) - 1 : -1
  const postContent = posts?.content?.[postIndex]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 pb-12 max-w-[1600px] mx-auto">
      {posts?.content.map(
        (
          { id, title, image, mainContent, summary, author, date, jobTitle },
          index,
        ) => (
          <PostCard
            title={title}
            key={id}
            order={index + 1}
            image={image}
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
        {postContent ? <PostCardDetail content={postContent} /> : null}
      </Modal>
    </div>
  )
}

export default PostCards
