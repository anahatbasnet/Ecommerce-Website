import { useSelector } from 'react-redux'
import Cartproduct from '../component/Cartproduct'
import Khalti from '../component/Khalti/Khalti'


import Button from '../component/Button'


export default function Checkout() {
  
  const { filter } = useSelector(state => state.filtereditem)
  const { counter } = useSelector(state => state.Products)

  const handleSubmit = () => {
   
       alert("ORDER PLACED SUCCESSFULLY!!!")
  }

  let totalPrice = 0
  filter.forEach(cart => {
    totalPrice = totalPrice + cart.price * counter
  })

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <div className='bg-white rounded shadow-md p-6'>
          {filter.map(cart => (
            <Cartproduct key={cart.id} cartproduct={cart} val={true} />
            ))}
         
          <p className='text-2xl font-extrabold flex justify-center border-2 m-4 p-2 border-sky-500 text-sky-700'>
            Total Price: {totalPrice}
          </p>
   
           
       
            <button onClick={handleSubmit}>
              <Button text={'Cash on Delivery'} />

            </button>

            <Khalti price={totalPrice} />
          </div>
        </div>
      </div>
   
  )
}
