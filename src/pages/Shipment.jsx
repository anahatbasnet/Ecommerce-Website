import { TbTruckDelivery } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Cartproduct from '../component/Cartproduct'
import Modal from 'component/Modal'
import { Link } from 'react-router-dom'
export default function Shipment(){
    const { Information } = useSelector(state => state.address)
    const { buy } = useSelector(state => state.buynow)
    const { counter } = useSelector(state => state.Products)
    const { filter } = useSelector(state => state.filtereditem)

    let totalPrice = 0
  filter.forEach(cart => {
    totalPrice = totalPrice + cart.price * counter
  })
    return(

        <>
        
        <div className='sticky top-0 z-10 bg-white'>
        <Navbar />
      </div>
  
        <div className='container flex flex-col justify-center items-center mx-auto mt-10'>
          <div className='flex justify-center shadow-2xl shadow-blue-500/20'>
            <div>
              <p className='text-sky-700 flex justify-center border-b border-sky-700'>
                <TbTruckDelivery size={150} className='text-4xl' />
              </p>
              <p className='text-sky-700 font-bold text-2xl flex justify-center mt-4'>
                Your order is on the way
              </p>
              <p className='mb-2 flex justify-start mt-4 ml-12'>
                <span className='font-semibold'>Name:</span> {Information.fullname}
              </p>
              <p className='mb-2 flex justify-start mt-4 ml-12'>
                <span className='font-semibold'>Phone Number:</span> {Information.phonenumber}
              </p>
              <p className='mb-2 flex justify-start mt-4 ml-12'>
                <span className='font-semibold'>State:</span> {Information.state}
              </p>
              <p className='mb-2 flex justify-start ml-12'>
                <span className='font-semibold'>City:</span> {Information.city}
              </p>
              <p className='mb-2 flex justify-start ml-12'>
                <span className='font-semibold'>Address:</span> {Information.landmark}
              </p>
              <p className='mb-2 flex justify-start ml-12'>
                <span className='font-semibold'>Email:</span> {Information.emailaddress}
              </p>
              <div className='bg-white w-4/5 mt-4'>
                <h2 className='font-bold text-sky-700 text-2xl flex justify-center ml-20'>
                  Order Details
                </h2>
                <div className='flex items-center '>
                 
                  
                      <div className='max-w-4xl mx-auto px-4 py-8 md:w-[45rem] p-5 md:ml-32'>
                     
                          {filter.length > 0 ? (
                            filter.map(cart => (
                              <Cartproduct
                                key={cart.id}
                                cartproduct={cart}
                                val={true}
                                showDeleteButton={false}
                              />
                            ))
                          ) : (
                            <p className='text-lg font-bold text-sky-700'>
                              Your cart is empty.
                            </p>
                          )}
                          <p className='text-2xl font-extrabold flex justify-center border-2 m-4 p-2 border-sky-500 text-sky-700'>
                            Be Ready with $ {totalPrice}
                          </p>
                        </div>
                     
                    </div>
            <Link to ="/">
                <button className=' border flex justify-center bg-green-600 p-2 md:w-[25%] text-white rounded-3xl mb-5 ml-5 '>Continue Shopping</button>
            </Link>
                  
                </div>
              </div>
            </div>
          </div>
       
        <Footer />
      </>
    )
}