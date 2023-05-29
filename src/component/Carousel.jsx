import React, { useState, useEffect } from 'react'

import mens from '../assets/Images/mens.jpg'
import electronics from '../assets/Images/electronics.jpg'

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import ring from 'assets/Images/ring.jpg'
export default function Carousel() {
  const navigate = useNavigate()
  const carouselItems = [
    {
      image: electronics,
      description: 'Get the best tech Products Here in Bazaar',
      descriptionPosition: 'bottom-[1rem] left-[1rem] p-4 ',
      link: '/electronics',
    },
    {
      image: ring,
      description: 'Shine bright like diamonds by shopping in Bazaar',
      descriptionPosition: 'bottom-[5rem] left-[rem] p-4 ',
      link: '/jewelry',
    },
    {
      image: mens,
      description: 'Make a style statement with Bazaar!!!',
      descriptionPosition: 'bottom-0 right-0 p-4',
      link: "/men's clothing",
    },
  ]

  const [currentItem, setCurrentItem] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem(prevItem =>
        prevItem === carouselItems.length - 1 ? 0 : prevItem + 1
      )
    }, 3000) 

    return () => clearInterval(interval)
  }, [carouselItems])

  const handlePrev = () => {
    setCurrentItem(prevItem =>
      prevItem === 0 ? carouselItems.length - 1 : prevItem - 1
    )
  }

  const handleNext = () => {
    setCurrentItem(prevItem =>
      prevItem === carouselItems.length - 1 ? 0 : prevItem + 1
    )
  }

  const handleShopNow = () => {
    const { link } = carouselItems[currentItem]
    navigate(link)
  }

  return (
    <div className='carousel-container w-full relative'>
      <div className='carousel-item relative'>
        <img
          className='carousel-image w-full h-[75vh] object-cover'
          src={carouselItems[currentItem].image}
          alt=''
        />
        <div
          className={`carousel-description absolute ${carouselItems[currentItem].descriptionPosition} bg-transparent  text-white`}
        >
          <p className='md:text-3xl text-xl border-b border-transparent hover:border-blue-500 transition-all duration-300'>
            {carouselItems[currentItem].description}
          </p>
          <button
            className='shop-now-button bg-white text-gray-900 px-4 py-2 mt-4 rounded'
            onClick={handleShopNow}
          >
            Shop Now
          </button>
        </div>
        <div className='carousel-navigation absolute bottom-16 left-0 right-0 flex justify-between px-4 text-slate-50'>
          <button
            className='carousel-prev hover:text-sky-600 mb-[11rem]'
            onClick={handlePrev}
            aria-label='Previous'
          >
            <BsFillArrowLeftCircleFill size={46} />
          </button>
          <button
            className='carousel-next hover:text-sky-600 mb-[11rem] '
            onClick={handleNext}
            aria-label='Next'
          >
            <BsFillArrowRightCircleFill size={46} />
          </button>
        </div>
        <div className='carousel-buttons absolute bottom-4 left-0 right-0 flex justify-center'>
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`carousel-button ${
                index === currentItem ? 'active' : ''
              }`}
              onClick={() => setCurrentItem(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
