import Footer from 'component/Footer'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeAll } from 'redux/Slice/cartSlice'
import Cartproduct from '../component/Cartproduct'
import Navbar from '../component/Navbar'
import { setFilter } from '../redux/Slice/filtereditemslice'
import { setPrice } from '../redux/Slice/totalslice'
import {ImCross} from 'react-icons/im'
export default function Cart() {
  const { counter } = useSelector(state => state.Products)
  const { addtocart } = useSelector(state => state.cart)
  const [selectedItems, setSelectedItems] = useState([])
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

  const handleSelectAll = () => {
    if (selectedItems.length === addtocart.length) {
      setSelectedItems([])
      setCheckedItems([])
    } else {
      const allItemIds = addtocart.map(cart => cart.id)
      setSelectedItems(allItemIds)
      setCheckedItems(allItemIds)
    }
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
  // const handleRemoveFromCart = () => {
  //   dispatch(removefromcart(cartproduct.id));
  // };
  const handleremoveall = () => {
    dispatch(removeAll())
  }

  return (
    <>
      <div className='sticky top-0 z-10 bg-white'>
        <Navbar />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-4xl m-auto flex justify-center p-4 w-[50%]   text-sky-600 font-bold font-mono '>
          Shopping Cart <AiOutlineShoppingCart />
        </h1>
        <div className='flex flex-col md:flex-row justify-between mr-20 ml-20'>
          <div className=' mt-10 md:ml-11  '>
            <div className=' flex   justify-end md:mb-10 '>
              <button
                onClick={handleSelectAll}
                className='border border-white bg-green-700 text-white p-2 w-28 rounded-3xl '
              >
                Select All
              </button>
              <button
                onClick={handleremoveall}
                className='border border-white bg-red-700 text-white p-2 w-28 rounded-3xl '
              >
                Remove all
              </button>
            </div>
            {/* <button onClick={handleRemoveFromCart}> Remove From Cart</button> */}
            {addtocart.length !== 0 ? (
              addtocart.map(cart => (
                <div className='md:w-[50rem] md:mr-10 ' key={cart.id}>
                  <Cartproduct
                    cartproduct={cart}
                    onCheckboxChange={handleCheckboxChange}
                    selectedItems={selectedItems}
                  />
                </div>
              ))
            ) : (
              <div className='flex justify-center p-10 text-rose-600 items-center'>
                <ImCross />
                <p className='p-5 text-lg '>No Items Here</p>
              </div>
            )}
          </div>

          {checkedItems.length > 0 && (
            <div className='flex   md:w-[45rem] flex-col bg-grey  mt-20  '>
              <h2 className='flex justify-center font-bold text-3xl text-sky-700 border-b-4 md:p-3 border-sky-700'>
                Order Summary
              </h2>
              <div className=' text-sky-700 mt-5 mb-5 text-lg  '>
                {filteredCartItems.map(cart => (
                  <Cartproduct
                    key={cart.id}
                    cartproduct={cart}
                    val={true}
                    showDeleteButton={false}
                  />
                ))}
              </div>
              <p className='text-2xl font-extrabold flex justify-center border-2 md:m-4 md:p-2 border-sky-800 text-sky-800'>
                Total Price: {totalPrice}
              </p>
              <button
                className='text-2xl font-extrabold flex justify-center border-2 md:m-4 md:p-2 border-sky-800 bg-sky-600 text-neutral-50'
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
        <div className='mt-16'>

      <Footer />
        </div>
      </div>
    </>
  )
}
