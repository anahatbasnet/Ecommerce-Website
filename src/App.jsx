import { Suspense, lazy, useEffect, useState } from 'react'
import './App.css'

import Navbar from './component/Navbar'

import Cards from './component/Cards'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts } from './redux/Slice/productslice'
import Carousel from './component/Carousel'



function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      dispatch(setProducts(res.data))
      setLoading(false)
    }, [])
  })
  return (
       
    <div>
      <div className='sticky top-0 z-10 bg-white'>
          <Navbar />
      </div>

      <div className='w-[100%]'>
        <Carousel />
      </div>

      <div className='md:ml-[15rem] ml-[3rem] mb-2  object-contain'>
       
        <div>
          <Cards category={"men's clothing"} loading={loading} />
        </div>
        <div>
          <Cards category={'jewelery'} loading={loading} />
        </div>
        <div>
          <Cards category={'electronics'} loading={loading} />
        </div>
      </div>
    </div>
    
  )
}

export default App
