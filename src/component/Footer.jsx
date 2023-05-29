import { Link } from 'react-router-dom'
import logo from '../assets/Images/logo.png'
import{FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"
export default function Footer() {
  return (
    <div className='h-FULL bg-[#0F4C75] p-7  '>
      <div className='all md:flex md:justify-around border-b-2 border-[#068DA9] '>
        <div className='logo  mt-10'>
          <img src={logo} alt='footer' className='w-[10rem]' />
        </div>
        <div className='menu md:mb-7 text-white'>
          <p className='pt-4 pb-2 text-2xl text-[#BBE1FA] '>MENU</p>
          <Link to = "/">
          <p>Home</p>
          </Link>
          <Link to = "/wishlist">
          <p>Wishlist</p>
          </Link>
          <Link to = "/cart">
          <p>Cart</p>
          </Link>
          <Link to = "/login">
          <p>Login</p>
          </Link>
        </div>
        <div className='company text-white '>
          <p className='pt-4 pb-2 text-2xl text-[#BBE1FA]  '>COMPANY </p>
          <p>Strategic Partners</p>
          <p>Privacy Policy</p>
          <p>Terms and Condition</p>
        </div>
        <div className='contact  text-white'>
          <p className='pt-4 pb-2 text-2xl text-[#BBE1FA]'>CONTACT </p>
          <p>Contact Sales</p>
          <p>+95 555 223 4545</p>
        </div>
        <div className='Tech mb-5 text-white'>
          <p className='pt-4 pb-2 text-2xl text-[#BBE1FA] '>TECH SUPPORT </p>
          <p>Tech Support</p>
          <p>Help</p>
        </div>
      </div>
      <div className="copyright flex justify-between pt-2 md:text-lg text-white">
        <div className="copy ">
      Bazaar 2023 <sup>&copy;</sup>
        </div>
        <div className="social flex justify-around md:flex md:space-around md:gap-x-5">
        <FaFacebookF/>
        <FaInstagram/>
        <FaTwitter/>
        </div>
      </div>
    </div>
  )
}
