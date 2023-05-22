import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../component/Button'
import Khalti from '../component/Khalti/Khalti'

export default function Order() {
  const { location } = useSelector(state => state.address)
  const { buy } = useSelector(state => state.buynow)
  const { counter } = useSelector(state => state.Products)
  const navigate = useNavigate()
  const handleSubmit = () => {
    location.state && location.country && location.city
      ? navigate('/delivery')
      : alert(
          'Please provide the correct Shipment Address',
          'bg-red-500 text-white p-4 rounded-lg'
        )
  }

  return (
    <div className='md:p-6 md: bg-white md:shadow-md md:w-[60%] md:m-auto md:mt-20 w-52  '>
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
      <h3 className='text-xl font-semibold mb-4'>
        Shipment Address
      </h3>
      <p className='mb-2 '>
        <span className='font-semibold'>Street:</span> {location.state}
      </p>
      <p className='mb-2'>
        <span className='font-semibold'>City:</span> {location.city}
      </p>
      <p className='mb-4'>
        <span className='font-semibold'>Country:</span> {location.country}
      </p>
      <div className='bttons flex justify-around'>
        <Link to='/address'>
          <Button text={'Add Shipment Address'} />
        </Link>
        <button onClick={handleSubmit}>
          <Button text={'Cash on Delivery'} />
        </button>

        <Khalti price={buy.price * counter} />
      </div>
    </div>
  )
}
