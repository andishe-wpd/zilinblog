import Button from '@components/button/Button'
import samplepost from '/samplepost.png'
import ArrowIcon from '@assets/icons/ArrowIcon'
import { useNavigate, useParams } from 'react-router-dom'
import Link from '@components/link/Link'
import { FC } from 'react'
import SpokenDate from '@components/utils/SpokenDate'
import LazyLoadImage from '@components/lazyLoadImage/lazyLoadImage'
import { Post } from '../../interfaces/Post'

const PostCard: FC<Post> = ({
  title,
  summary,
  author,
  mainContent,
  picture,
  date,
  jobTitle,
}) => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <section className="relative max-w-[326px] mx-auto">
      <figure className="relative">
        <LazyLoadImage picture={picture} />
        <div className="absolute gradient-glass-card">
          <div className="flex flex-col text-sm">
            <span className="font-semibold">{author}</span>
            <span>{SpokenDate(date)}</span>
          </div>
          <span className="font-semibold">{jobTitle}</span>
        </div>
      </figure>
      <div className="py-8">
        <div className="font-semibold text-2xl">{title}</div>
        <div className="text-textSecondary">{summary}</div>
      </div>
      <Link
        to={'/' + (params?.page || '1') + '/5'}
        className="text-primary font-semibold absolute bottom-0"
      >
        <div className="flex gap-2 items-center">
          Read post
          <ArrowIcon className="transform rotate-135" stroke="#175CD3" />
        </div>
      </Link>
    </section>
  )
}

export default PostCard
