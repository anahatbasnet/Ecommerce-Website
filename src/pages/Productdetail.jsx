import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../component/Navbar'
import { setbuy } from '../redux/Slice/buynowslice'
import { setaddtocart } from '../redux/Slice/cartSlice'
import {
  setDecrementCounter,
  setIncrementCounter,
} from '../redux/Slice/productslice'

export default function Purchase() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const counter = useSelector(state => state.Products.counter)

  const increment = () => {
    dispatch(setIncrementCounter())
  }

  const decrement = () => {
    dispatch(setDecrementCounter())
  }
  const [products, setProducts] = useState('')
  const buy = () => {
    dispatch(setbuy(products))
  }

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
      setProducts(res.data)
    })
  }, [dispatch, id])
  const handleClick = () => {
    dispatch(setaddtocart(products))
  }

  return (
    <>
      <div className='details'>
        <Navbar />
        <div className='md:flex md:justify-center md:items-center md:border md:h-[35rem] md:w-[60rem] md:m-auto mt-[8rem] border bottom-5'>
          <div className='w-[35rem] h-[23rem] ml-[2rem] mt-40 flex-col justify-center '>
            {products && (
              <img src={products?.image} alt='product' className='w-48' />
            )}
            <h2 className='font-bold m-9 text-3xl '>${products?.price}</h2>
          </div>
          <div className='m-[18px]'>
            <h3 className='md:p-5 md:text-5xl md:font-bold text-2xl font-bold '>
              {products ? products.title : 'product.title'}
            </h3>
            <p className='flex  items-center p-3'>
              <AiFillStar />
              {products?.rating?.rate} <BsFillPersonFill />{' '}
              {products?.rating?.count}
            </p>
            <p className=' md:p-3'>{products?.description}</p>
            <div className='md:p-3 md:font-bold '>
              <p>Quantity</p>
              <div className='flex ml-5'>
                <button onClick={decrement}>-</button>
                {counter}
                <button onClick={increment}>+</button>
              </div>
            </div>

            <div className='md:h-4 md:w-85  '>
              <Link to='/buynow'>
                <button
                  className='md:border md:rounded-3xl md:h-10 md:w-28 md:m-2 md: bg-sky-600 md: text-white md: hover:bg-sky-700 rounded-3xl p-2 text-sm mb-5 w-28 mr-5'
                  onClick={buy}
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
      </div>
    </>
  )
}
