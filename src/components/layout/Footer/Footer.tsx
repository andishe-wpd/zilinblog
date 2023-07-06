import Pagination from './Pagination'
const Footer = () => {
  return (
    <footer className="pt-5 pb-6 border-t">
      <Pagination
        totalItems={10}
        itemsPerPage={1}
        currentPage={6}
        onPageChange={() => {
          console.log('')
        }}
      />
    </footer>
  )
}

export default Footer
