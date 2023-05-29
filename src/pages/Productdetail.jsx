import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../component/Navbar'
import { setbuy } from '../redux/Slice/buynowslice'
import { setaddtocart } from '../redux/Slice/cartSlice'
import {
  setCartItems,
  setDecrementCounter,
  setIncrementCounter,
} from '../redux/Slice/productslice'
import Footer from '../component/Footer'
import ProductDetailShimmer from 'component/ProductDetailShimmer'

export default function Productdetail() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const counter = useSelector(state => state.Products.counter)
  const navigate = useNavigate()
  const [shimmer, setShimmer] = useState(true)

  const increment = () => {
    dispatch(setIncrementCounter())
  }

  const decrement = () => {
    dispatch(setDecrementCounter())
  }

  const [products, setProducts] = useState('')

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
      setProducts(res.data)
      setShimmer(false)
    })
  }, [dispatch, id])

  const handleClick = () => {
    dispatch(setaddtocart(products))
    dispatch(setCartItems({ id: products.id, quantity: counter }))
  }
  const handleClickBuy = () => {
    dispatch(setbuy(products)) // Dispatch the setbuy action with the selected product
    navigate('/buynow') // Navigate to the buynow route
  }

  return (
    <>
      <div className='details w-full'>
        <div className='sticky top-0 z-10 bg-white'>
          <Navbar />
        </div>
        {shimmer ? (
          <ProductDetailShimmer />
        ) : (
          <>
            <div className='md:flex md:justify-center md:items-center   md:h-[35rem] md:w-[60rem] md:m-auto mt-[8rem]  bottom-5  w-full md:mb-10'>
              <div className='md:w-[35rem] h-[23rem] md:ml-[2rem] mt-40 flex-col justify-center w-[20rem] md:m-2 m-auto '>
                {products && (
                  <img
                    src={products?.image}
                    alt='product'
                    className='md:w-48 md:ml-3 w-44 flex justify-center m-auto '
                  />
                )}
                <h2 className='font-bold text-3xl ml-24 mt-10'>
                  ${products?.price}
                </h2>
              </div>
              <div className='m-[18px]'>
                <h3 className='md:p-5 md:text-5xl md:font-bold text-xl '>
                  {products ? products.title : 'product.title'}
                </h3>
                <p className='flex  items-center p-3'>
                  <AiFillStar />
                  {products?.rating?.rate} <BsFillPersonFill />{' '}
                  {products?.rating?.count}
                </p>
                <p className=' md:p-3'>{products?.description}</p>
                <div className='md:p-3 font-bold  mb-4 mt-2 ml-3 text-xl '>
                  <p>Quantity</p>
                  <div className='flex ml-5'>
                    <button onClick={decrement} className='mr-2 '>
                      -
                    </button>
                    {counter}
                    <button onClick={increment} className='ml-2 '>
                      +
                    </button>
                  </div>
                </div>

                <div className='md:h-4 md:w-85  '>
                  <Link to='/buynow'>
                    <button
                      className='md:border md:rounded-3xl md:h-10 md:w-28 md:m-2 md: bg-sky-600 md: text-white md: hover:bg-sky-700 rounded-3xl p-2 text-sm mb-5 w-28 mr-5'
                      onClick={handleClickBuy}
                    >
                      Buy
                    </button>
                  </Link>
                  <Link to='/addtocart'>
                    <button
                      className='md:border md:rounded-3xl md:h-10 md:w-28 md:m-2 md: bg-sky-600 md: text-white md: hover:bg-sky-700 rounded-3xl p-2 text-sm mb-5 w-28'
                      onClick={() => handleClick()}
                    >
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  )
}
