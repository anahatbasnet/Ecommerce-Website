import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShimmerButton,
  ShimmerText,
  ShimmerThumbnail,
  ShimmerTitle,
} from 'react-shimmer-effects';

export default function ProductDetailShimmer() {
  return (
    <div className='md:flex md:justify-center md:items-center md:h-[35rem] md:w-[60rem] md:m-auto mt-[8rem] bottom-5 w-full md:mb-10'>
      <div className='md:w-[25rem] h-[23rem] md:ml-[2rem] mt-40 flex-col justify-center w-[18rem] md:m-2 m-auto'>
        <ShimmerThumbnail
          height={250}
          width={'100%'}
          className='md:w-44 md:ml-3 w-40 flex justify-center md:p-4 shimmer-effect '
        />
        <h2 className='font-bold mt-8 text-3xl'>
          <ShimmerTitle line={1} center className='shimmer-effect' />
        </h2>
      </div>
      <div className='md:w-[35rem] md:ml-4'>
        <h3 className='md:p-5 md:text-5xl md:font-bold text-2xl font-bold'>
          <ShimmerTitle line={1} center className='shimmer-effect' />
        </h3>
        <p className='flex items-center p-3'>
          <ShimmerText line={1} className='shimmer-effect' />
        </p>
        <p className='md:p-3'>
          <ShimmerText line={3} className='shimmer-effect' />
        </p>
        <div className='md:p-3 font-bold mb-4 mt-2 ml-3 text-xl'>
          <p>Quantity</p>
          <div className='flex ml-5'>
            <ShimmerButton size='sm' className='shimmer-effect' />
            <ShimmerText line={1} className='shimmer-effect' />
            <ShimmerButton size='sm' className='shimmer-effect' />
          </div>
        </div>

        <div className='md:h-4 md:w-85'>
          <Link to='/buynow'>
            <button className='md:border md:rounded-3xl md:h-10 md:w-28 md:m-2 md:bg-sky-600 md:text-white md:hover:bg-sky-700 rounded-3xl p-2 text-sm mb-5 w-28 mr-5 shimmer-effect'>
           
            </button>
          </Link>
          <Link to='/addtocart'>
            <button className='md:border md:rounded-3xl md:h-10 md:w-28 md:m-2 md:bg-sky-600 md:text-white md:hover:bg-sky-700 rounded-3xl p-2 text-sm mb-5 w-28 shimmer-effect'>
            
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
