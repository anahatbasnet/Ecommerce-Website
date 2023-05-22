import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cartproduct from '../component/Cartproduct'
import Navbar from '../component/Navbar'
import { setFilter } from '../redux/Slice/filtereditemslice'
import { setPrice } from '../redux/Slice/totalslice'
export default function Cart() {
  const { counter } = useSelector(state => state.Products)
  const { addtocart } = useSelector(state => state.cart)
  const [checkedItems, setCheckedItems] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCheckboxChange = (event, cartId) => {
    const isChecked = event.target.checked

    setCheckedItems(prevState => {
      if (isChecked) {
        return [...prevState, cartId]
      } else {
        return prevState.filter(id => id !== cartId)
      }
    })
  }

  const filteredCartItems = addtocart.filter(cart =>
    checkedItems.includes(cart.id)
  )
  const handleCheckout = () => {
    navigate('/checkout')
  }

  useEffect(() => {
    filteredCartItems.forEach(element => {
      dispatch(setPrice(element.price))
    })
    //eslint-disable-next-line
  }, [filteredCartItems])

  let totalPrice = 0
  filteredCartItems.forEach(cart => {
    totalPrice = totalPrice + cart.price * counter
  })
  dispatch(setFilter(filteredCartItems))
  return (
    <>
      <Navbar />
      <div className='flex flex-col'>
        <h1 className='text-4xl m-auto flex justify-center p-4 w-[50%] mb-4 border-4 border-sky-700 text-sky-600 font-bold font-mono '>
          Shopping Cart <AiOutlineShoppingCart />
        </h1>
        <div className='flex justify-between mr-20 ml-20'>
          <div className=' mt-20 ml-11 '  >
            {addtocart.map(cart => (
              <Cartproduct
                key={cart.id}
                cartproduct={cart}
                onCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>

          {checkedItems.length > 0 && (
            <div className='flex  h-[100vh] w-[25%] flex-col bg-grey border mt-20 mr-10 ' >
              <h2 className='flex justify-center font-bold text-3xl text-sky-700 border-b-4 p-3 border-sky-700 '>
                Order Summary
              </h2>
              <div className=' text-sky-700'>
                {filteredCartItems.map(cart => (
                  <Cartproduct key={cart.id} cartproduct={cart} val={true} />
                ))}
              </div>
              <p className='text-2xl font-extrabold flex justify-center border-2 m-4 p-2 border-sky-800 text-sky-800'>
                Total Price: {totalPrice}
              </p>
              <button
                className='text-2xl font-extrabold flex justify-center border-2 m-4 p-2 border-sky-800 bg-sky-600 text-neutral-50'
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
