import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'

export default function Addcart() {
  return (
    <>
      <Navbar />
      <div className='mt-15'>
        <div className='md:flex md:justify-center md:m-auto  md: h-[20vh] md:w-[50%] md:items-center md:p-10 md:flex-col justify-center text-lg  m-10 '>
          <h3 className='md:text-3xl text-xl flex justify-center p-4 '>
            {' '}
            Item added to cart successfully
          </h3>
          <Link to='/cart'>
            <button className='border rounded-3xl md:p-1 md:h-10 w-28  bg-sky-600 text-white hover:bg-sky-700 m-auto flex  justify-center '>
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
