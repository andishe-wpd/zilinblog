import Pagination from './Pagination'
import { useParams } from 'react-router-dom'
const Footer = () => {
  const { page } = useParams()
  return (
    <footer className="pt-5 pb-6 border-t">
      <Pagination
        totalItems={10}
        itemsPerPage={1}
        currentPage={parseInt(page || '1')}
        onPageChange={() => {
          console.log('')
        }}
      />
    </footer>
  )
}

export default Footer
