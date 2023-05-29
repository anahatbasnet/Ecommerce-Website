import { TbTruckDelivery } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Cartproduct from '../component/Cartproduct'
import Modal from 'component/Modal'
import { Link } from 'react-router-dom'

export default function DeliveryPage({ cartproduct, totalPrice }) {
  const { Information } = useSelector(state => state.address)
  const { buy } = useSelector(state => state.buynow)
  const { counter } = useSelector(state => state.Products)
  const { filter } = useSelector(state => state.filtereditem)

  console.log(filter) // Debugging: Check the content of the filter array

  return (
    <>
      <div className='sticky top-0 z-10 bg-white '>
        <Navbar />
      </div>

      <div className='container flex flex-col justify-center items-center  mt-10 '>
        <div className='flex justify-center shadow-2xl shadow-blue-500/20 md:w-[50%]'>
          <div>
            <p className='text-sky-700 flex justify-center border-b border-sky-700'>
              <TbTruckDelivery size={150} className='text-4xl' />
            </p>
            <p className='text-sky-700 font-bold text-2xl flex justify-center mt-4'>
              Your order is on the way
            </p>
            <p className='mb-2 flex justify-start mt-4 ml-12'>
              <span className='font-semibold'>Name:</span>{' '}
              {Information.fullname}
            </p>
            <p className='mb-2 flex justify-start mt-4 ml-12'>
              <span className='font-semibold'>Phone Number:</span>{' '}
              {Information.phonenumber}
            </p>
            <p className='mb-2 flex justify-start mt-4 ml-12'>
              <span className='font-semibold'>State:</span> {Information.state}
            </p>
            <p className='mb-2 flex justify-start ml-12'>
              <span className='font-semibold'>City:</span> {Information.city}
            </p>
            <p className='mb-2 flex justify-start ml-12'>
              <span className='font-semibold'>Address:</span>{' '}
              {Information.landmark}
            </p>
            <p className='mb-2 flex justify-start ml-12'>
              <span className='font-semibold'>Email:</span>{' '}
              {Information.emailaddress}
            </p>
            <div className='bg-white w-4/5 mt-4 p-8'>
              <h2 className='font-bold text-sky-700 text-2xl flex justify-center'>
                Order Details
              </h2>
              <div className='flex items-center mt-5'>
               
                  <>
                    <img
                      src={buy.image}
                      alt=''
                      className='object-cover w-20  mr-5'
                    />
                    <div>
                      <h2 className='font-bold text-sky-700 text-lg'>
                        {buy.title}
                      </h2>
                      <h2 className='text-lime-700 font-bold'>
                        Be Ready with ${buy.price * counter}
                      </h2>
                    </div>
                  </>
                
                        
              </div>
            </div>
            <Link to ="/">
                <button className=' border bg-green-600 p-2 md:w-[25%] text-white rounded-3xl mb-5 ml-5 '>Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Footer />
      </div>
    </>
  )
}
