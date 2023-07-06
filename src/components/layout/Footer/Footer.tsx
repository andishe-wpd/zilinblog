import Pagination from './Pagination'
const Footer = () => {
  return (
    <div className="pt-5 pb-6 border-t">
      <Pagination
        totalItems={10}
        itemsPerPage={1}
        currentPage={6}
        onPageChange={() => {
          console.log('')
        }}
      />
    </div>
  )
}

export default Footer
