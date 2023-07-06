import MoreDotIcon from '@assets/icons/MoreDotIcon'
import Button from '@components/button/Button'
const Breadcrumb = () => {
  return (
    <div className="flex-wrap-between-center my-4  pb-4 border-b">
      <div className="font-semibold">Recent posts</div>
      <Button
        icon={<MoreDotIcon />}
        onClickAction={() => {
          console.log('')
        }}
      />
    </div>
  )
}

export default Breadcrumb
