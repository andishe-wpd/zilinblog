import React, { useState, useEffect } from 'react'
import { PostImageProps } from '@interfaces/PostImageProps'

const LazyLoadImage: React.FC<PostImageProps> = ({ picture }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [currentImage, setCurrentImage] = useState<string>('/samplepost.jpg') // replace this with your placeholder image path

  useEffect(() => {
    const img = new Image()

    img.src = picture
    img.onload = () => {
      setCurrentImage(picture)
      setLoading(false)
    }
  }, [picture])

  return (
    <div
      className={`transition-opacity duration-500 ${
        loading ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <img src={currentImage} alt="" />
    </div>
  )
}

export default LazyLoadImage
