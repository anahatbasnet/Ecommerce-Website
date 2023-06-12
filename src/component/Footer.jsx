import { Link } from 'react-router-dom'
import logo from '../assets/Images/logo.png'
import{FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"
import { useTranslation } from 'react-i18next'
export default function Footer() {
  const { t } = useTranslation()
  return (
    <div className='h-FULL bg-[#0F4C75] p-7  '>
      <div className='all md:flex md:justify-around border-b-2 border-[#068DA9] '>
        <div className='logo  mt-10'>
          <img src={logo} alt='footer' className='w-[10rem]' />
        </div>
        <div className='menu md:mb-7 text-white'>
          <p className='pt-4 pb-2 text-2xl text-[#BBE1FA] '>{t('menu')}</p>
          <Link to = "/">
          <p>{t('home')}</p>
          </Link>
          <Link to = "/wishlist">
          <p>{t('wishlist')}</p>
          </Link>
          <Link to = "/cart">
          <p>{t('cart')}</p>
          </Link>
          <Link to = "/login">
          <p>{t('login')}</p>
          </Link>
        </div>
        <div className='company text-white '>
          <p className='pt-4 pb-2 text-2xl text-[#BBE1FA]  '>{t('company')} </p>
          <p>{t('strategicpartner')}</p>
          <p>{t('privacypolicy')}</p>
          <p>{t('tandc')}</p>
        </div>
        <div className='contact  text-white'>
          <p className='pt-4 pb-2 text-2xl text-[#BBE1FA]'>{t('contacts')} </p>
          <p>{t('contactsales')}</p>
          <p>{t('phone')}</p>
        </div>
        <div className='Tech mb-5 text-white'>
          <p className='pt-4 pb-2 text-2xl text-[#BBE1FA] '>{t('ts')}</p>
          <p>{t('ts1')}</p>
          <p>{t('help')}</p>
        </div>
      </div>
      <div className="copyright flex justify-between pt-2 md:text-lg text-white">
        <div className="copy ">
        {t('bazar')} 2023 <sup>&copy;</sup>
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
