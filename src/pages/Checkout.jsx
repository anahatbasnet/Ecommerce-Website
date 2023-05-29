import { useSelector } from 'react-redux'
import Cartproduct from '../component/Cartproduct'
import Khalti from '../component/Khalti/Khalti'

import Button from '../component/Button'
import Navbar from '../component/Navbar'
import Footer from 'component/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from 'component/Modal'

export default function Checkout() {
  const { Information } = useSelector(state => state.address)
  const { filter } = useSelector(state => state.filtereditem)
  const { counter } = useSelector(state => state.Products)
  const navigate = useNavigate()

  let totalPrice = 0
  filter.forEach(cart => {
    totalPrice = totalPrice + cart.price * counter
  })
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
      navigate('/Shipment')
    }
  }
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
      <div className='bg-gray-100 '>
        <div className='max-w-4xl mx-auto px-4 py-8'>
          <div className='bg-white rounded shadow-md p-6'>
            {filter.map(cart => (
              <Cartproduct
                key={cart.id}
                cartproduct={cart}
                val={true}
                showDeleteButton={false}
              />
            ))}

            <p className='text-2xl font-extrabold flex justify-center border-2 m-4 p-2 border-sky-500 text-sky-700'>
              Total Price: {totalPrice}
            </p>

            <button onClick={toggleModal} className='m-2'>
              <Button text={'Cash on Delivery'} />
            </button>

            <Khalti price={totalPrice} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
