import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from 'component/Footer'
import { useState } from 'react'
import Modal from 'component/Modal'
export default function Buynow() {
  const buy = useSelector(state => state.buynow.buy)
console.log("andi mandi",buy)

const navigate = useNavigate()
  const { counter } = useSelector(state => state.Products)
   const [modal, setModal] = useState(false)
  const { Information } = useSelector(state => state.address)
  const toggleModal = () => {
    setModal(!modal)
    if (
      Information.state &&
      Information.fullname &&
      Information.city &&
      Information.emailaddress &&
      Information.phonenumber
    ) {
      navigate('/order')
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

      <div className='sticky top-0 z-10  '>
        <Navbar />
      </div>
      <div className='fullpage   '>
        <div className='md:flex md:flex-row md:item-center  flex-col md:pl-[20%] pt-[5%] pb-[5%] md:p-[10rem] '>
          <div className=' md:mr-5'>
        
              <div className='  h-[3rem] md:m-2  items-center flex justify-center md:ml-10 rounded-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] '>
                <button onClick={toggleModal}>

                + Add New Delivery Address
                </button>
              </div>
    
            <div className=' w-full   md:m-2 md:w-[40rem] md:flex md:h-[15rem] md:ml-10 rounded-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] md:p-0 p-[25%]'>
              <img
                src={buy.image}
                alt=''
                className='md:object-content md:item-center p-10'
              />
              <div className='md:p-5 '>
                <h2 className='font-bold text-sky-700 text-2xl mt-8   '>
                  {buy.title}
                </h2>
                <h2 className='text-[#0F4C75]'>Quantity:{counter}</h2>
                <h2>Price: $ {buy.price * counter}</h2>
              </div>
            </div>
          </div>
          

          <div className='p-10  text-[#0F4C75] md:p-0 w-full flex  md:w-[20rem] md:h-[19rem]  mt-1 md:flex justify-center items-center md:rounded-lg rounded-md mb-7  flex-col shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] '>
            <p className=' md:text-xl'>Total Payment: ${buy.price}</p>
            <Link to='/order'>
              <button className='border rounded-2xl h-10 w-24 m-2 bg-sky-600  text-white hover:bg-sky-700  '>
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
