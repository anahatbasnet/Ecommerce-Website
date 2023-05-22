import { TbTruckDelivery } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import Navbar from '../component/Navbar'

export default function DeliveryPage({ cartproduct }) {
  const { location } = useSelector(state => state.address)
  const { buy } = useSelector(state => state.buynow)
  const { counter } = useSelector(state => state.Products)

  return (
    <>
      <Navbar />
      <div className='container flex flex-col justify-center items-center mx-auto h-screen p-6 '>
        <p className='text-sky-700 flex justify-center border-b border-sky-700 '>
          <TbTruckDelivery size={150} className='text-4xl' />
        </p>
        <div className='flex justify-center mt-8 shadow-2xl shadow-blue-500/20'>
          <div>
            <p className='text-sky-700 font-bold text-4xl flex justify-center mt-4'>
              Your order is on the way
            </p>
            <p className='mb-2 flex justify-start mt-4 ml-12'>
              <span className='font-semibold'>Street:</span> {location.state}
            </p>
            <p className='mb-2 flex justify-start  ml-12'>
              <span className='font-semibold'>City:</span> {location.city}
            </p>
            <p className='mb-4 flex justify-start ml-12'>
              <span className='font-semibold'>Country:</span> {location.country}
            </p>
            <div className='bg-white w-4/5 mt-10 p-8'>
              <h2 className='font-bold text-sky-700 text-4xl flex justify-center'>
                Order Details
              </h2>
              <div className='flex items-center mt-5'>
                <img
                  src={buy.image}
                  alt=''
                  className='object-cover w-16 h-16 mr-5'
                />
                <div>
                  <h2 className='font-bold text-sky-700 text-xl'>
                    {buy.title}
                  </h2>
                  <h2 className='text-lime-700 font-bold'>
                    Be Ready with ${buy.price * counter}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
