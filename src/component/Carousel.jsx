import React, { useState } from 'react'
import one from '../assets/Images/one.jpg'
import shoppinglady from '../assets/Images/shoppinglady.jpg'
import three from '../assets/Images/three.jpg'
import four from '../assets/Images/four.jpg'
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
  } from 'react-icons/bs'

export default function Carousel() {
    const carouselItems = [
        {
          image: three,
          description: 'Get the best tech Products Here in Bazaar',
        },
      {
        image: one,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: shoppinglady,
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        image: four,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
    ];
  
    const [currentItem, setCurrentItem] = useState(0);
  
    const handlePrev = () => {
      setCurrentItem(prevItem => (prevItem === 0 ? carouselItems.length - 1 : prevItem - 1));
    };
  
    const handleNext = () => {
      setCurrentItem(prevItem => (prevItem === carouselItems.length - 1 ? 0 : prevItem + 1));
    };
  
    return (
      <div className='carousel-container w-full relative'>
        <div className='carousel-item relative'>
          <img
            className='carousel-image w-full h-[75vh] object-cover'
            src={carouselItems[currentItem].image}
            alt=''
          />
          <div className='carousel-description absolute bottom-0 left-0 p-4 bg-gray-900 text-white'>
            <p className='text-lg'>{carouselItems[currentItem].description}</p>
          </div>
          <div className='carousel-navigation absolute bottom-16 left-0 right-0 flex justify-between px-4 text-slate-50 '>
            <button className='carousel-prev hover:text-sky-600' onClick={handlePrev}>
            <BsFillArrowLeftCircleFill size={46} />
            </button>
            <button className='carousel-next  hover:text-sky-600' onClick={handleNext}>
            <BsFillArrowRightCircleFill size={46}/>
            </button>
          </div>
        </div>
      </div>
    );
  }
  