import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../component/Button'
import Khalti from '../component/Khalti/Khalti'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Modal from '../component/Modal'
import { useState } from 'react'

export default function Order() {
  const { Information } = useSelector(state => state.address)

  const buy = useSelector(state => state.buynow.buy)

  const { counter } = useSelector(state => state.Products)
  const navigate = useNavigate()

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
    if (
      Information.state &&
      Information.fullname &&
      Information.city &&
      Information.emailaddress &&
      Information.phonenumber
    ) {
      navigate('/delivery')
    }
    
  }
  const toggleModal1 = () => {
    setModal(!modal)}
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {modal && <Modal toggleModal={toggleModal} />}
      <div className='sticky top-0 z-10 bg-white'>
        <Navbar />
      </div>

      <div className='md:p-6 md: bg-white md:shadow-md md:w-[60%] md:m-auto md:mt-20 w-52 md:mb-10  '>
        <h3 className='text-xl font-semibold mb-4'>Shipment Address</h3>
        <p className='mb-2 '>
          <span className='font-semibold'>FullName:</span>
          {Information.fullname}
        </p>{' '}
        <p className='mb-2 '>
          <span className='font-semibold'>Phone Number:</span>
          {Information.phonenumber}
        </p>{' '}
        <p className='mb-2 '>
          <span className='font-semibold'>Email:</span>
          {Information.emailaddress}
        </p>
        <p className='mb-2 '>
          <span className='font-semibold'>Street:</span> {Information.state}
        </p>
        <p className='mb-2'>
          <span className='font-semibold'>City:</span> {Information.city}
        </p>
        <p className='mb-4'>
          <span className='font-semibold'>Address:</span>
          {Information.landmark}
        </p>
        <h2 className=' text-lg font-bold'>Order Details</h2>
        <div className=' order-3  m-2 w-[40rem] h-[10rem] flex   '>
          <img
            src={buy.image}
            alt=''
            className='object-content item-center m-5'
          />
          <div>
            <h2 className='font-bold text-sky-700 text-2xl mt-8  '>
              {buy.title}
            </h2>
            <h2>Quantity:{counter}</h2>
            <h2>Price: $ {buy.price * counter}</h2>
          </div>
        </div>
        <div className='bttons flex md:justify-around   flex-col md:flex-row '>
          <button onClick={toggleModal1} className='m-2'>
            <Button text={'Add Shipment Address'} />
          </button>
          <button onClick={toggleModal} className='m-2'>
            <Button text={'Cash on Delivery'} />
          </button>
          <div className='m-2'>
            <Khalti price={buy.price * counter} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
