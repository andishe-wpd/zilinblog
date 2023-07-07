import Button from '@components/button/Button'
import samplepost from '/samplepost.png'
import ArrowIcon from '@assets/icons/ArrowIcon'
import { useNavigate, useParams } from 'react-router-dom'

const PostCard = () => {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <section className="max-w-[326px] mx-auto">
      <figure className="relative">
        <img src={samplepost} alt="" />
        <div className="absolute gradient-glass-card">
          <div className="flex flex-col text-sm">
            <span className="font-semibold">Lana Steiner</span>
            <span>18 Jan 2022</span>
          </div>
          <span className="font-semibold">Developer</span>
        </div>
      </figure>
      <div className="py-8">
        <div className="font-semibold text-2xl">Building your API Stack</div>
        <summary className="text-textSecondary">
          The rise of RESTful APIs has been met by a rise in tools for creating,
          testing, and managing them.
        </summary>
      </div>
      <Button
        title={'Read post'}
        className="flex-row-reverse text-primary hover:bg-transparent"
        icon={<ArrowIcon className="transform rotate-135" stroke="#175CD3" />}
        onClickAction={() => navigate('/' + (params?.page || '1') + '/5')}
      />
    </section>
  )
}

export default PostCard
