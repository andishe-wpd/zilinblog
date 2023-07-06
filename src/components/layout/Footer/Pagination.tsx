import React, { useState, useEffect, useCallback } from 'react'
import Button from '@components/button/Button'
import ArrowIcon from '@assets/icons/ArrowIcon'
interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const [pages, setPages] = useState<number[]>([])

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Update page numbers when totalPages or currentPage changes
  useEffect(() => {
    const tempPages: number[] =
      totalPages <= 10
        ? Array.from({ length: totalPages }, (_, i) => i + 1)
        : (() => {
            const startPage = Math.max(2, currentPage - 2)
            const endPage = Math.min(totalPages - 1, currentPage + 2)
            const arr = Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => startPage + i,
            )
            if (startPage > 3) arr.unshift(-1)
            if (endPage < totalPages - 2) arr.push(-1)
            arr.unshift(1)
            arr.push(totalPages)
            return arr
          })()
    setPages(tempPages)
  }, [totalPages, currentPage])

  // useCallback for memoization of handlers
  const onPrevPage = useCallback(() => {
    onPageChange(Math.max(1, currentPage - 1))
  }, [currentPage, onPageChange])

  const onNextPage = useCallback(() => {
    onPageChange(Math.min(totalPages, currentPage + 1))
  }, [totalPages, currentPage, onPageChange])

  return (
    <div className="flex flex-wrap items-center justify-between">
      <Button
        title="Previous"
        // className="mx-2 p-2 bg-blue-500 text-white rounded"
        onClickAction={onPrevPage}
        disabled={currentPage === 1}
        icon={<ArrowIcon />}
      />
      <div>
        {pages.map((page, idx) =>
          page === -1 ? (
            <span key={idx} className="mx-2">
              ...
            </span>
          ) : (
            <Button
              title={page}
              key={idx}
              onClickAction={onNextPage}
              className={` mx-1 ${
                currentPage === page ? 'bg-grey' : null
              }`}
            />
          ),
        )}
      </div>

      <Button
        title="Next"
        onClickAction={onNextPage}
        disabled={currentPage === 1}
        className="flex-row-reverse"
        icon={<ArrowIcon className='trasform rotate-180' />}
      />
    </div>
  )
}

export default Pagination
