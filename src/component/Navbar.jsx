import {
  AiOutlineHeart,

  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import logo from '../assets/Images/logo.png'

export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-between items-center py-6 px-10 lg:max-w-9xl md:max-w-7xl sm:max-w-2xl mx-auto'>
        <div className='logo'>
          <Link to='/'>
            <img
              src={logo}
              alt='bazzar'
              className='h-7 w-auto max-h-[2rem] max-w-[5rem] m-8'
            />
          </Link>
        </div>
        <div class='first flex space-x-6 '>
          <div class='about text-sm md:text-3xl font-mono'>
            <a href='/about'>ABOUT</a>
          </div>
          <div class='products text-sm md:text-3xl'>
            <a href='/products'>PRODUCTS</a>
          </div>
          <div class='category text-sm md:text-3xl'>
            <a href='/category'>CATEGORY</a>
          </div>
        </div>

        <div className='middle flex flex-grow'>
        
        </div>
        <div className='last flex space-x-6'>
          <Link to='/wishlist'>
            <div className='cart'>
              <AiOutlineHeart size={30} />
            </div>
          </Link>
          <Link to='/cart'>
            <div className='cart'>
              <AiOutlineShoppingCart size={30} />
            </div>
          </Link>
          <Link to='/login'>
            <div className='profile'>
              <CgProfile size={30} />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}
