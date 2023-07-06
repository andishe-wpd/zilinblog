import Button from '@components/button/Button'
import samplepost from '/samplepost.png'
import ArrowIcon from '@assets/icons/ArrowIcon'
const PostCard = () => {
  return (
    <div className="max-w-[326px] mx-auto">
      <div className="relative ">
        <img src={samplepost} alt="" />
        <div className="absolute gradient-glass-card ">
          <div className="flex flex-col text-sm	">
            <span className="font-semibold">Lana Steiner</span>
            <span>18 Jan 2022</span>
          </div>
          <span className="font-semibold">Developer</span>
        </div>
      </div>
      <div className="py-8 ">
        <div className=" font-semibold text-2xl"> Building your API Stack</div>
        <div className="text-[#667085]">
          The rise of RESTful APIs has been met by a rise in tools for creating,
          testing, and managing them.
        </div>
      </div>
      <Button
        title={'Read post'}
        className="flex-row-reverse p-0 text-primary hover:bg-transparent"
        icon={<ArrowIcon className="tranform rotate-135" stroke="#175CD3" />}
      />
    </div>
  )
}

export default PostCard
