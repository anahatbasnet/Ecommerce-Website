import { useEffect, useState } from 'react'
import './App.css'

import Navbar from './component/Navbar'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Cards from './component/Cards'
import Carousel from './component/Carousel'
import { setProducts } from './redux/Slice/productslice'
import Footer from './component/Footer'
import { useLocation, useNavigate } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState(null)
  const { state } = useLocation()
  const Category = state ? state : ''
  const navigate = useNavigate()
  const { t } = useTranslation()
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      dispatch(setProducts(res.data))
      setLoading(false)
    })
  }, [dispatch])

  const [selectedCategory, setSelectedCategory] = useState('')

  const handleSelectCategory = selectedCategory => {
    setSelectedCategory(selectedCategory)
  }

  return (
    <>
      <div>
        <div className='sticky top-0 z-10 bg-white'>
          <Navbar
            onSelectCategory={handleSelectCategory}
            setSearch={setSearch}
            state={Category}
          />
        </div>

        <div className='w-[100%]'>
          <Carousel />
        </div>

        <div className='md:flex md:justify-center md:flex-col md:ml-[12rem] ml-[2rem] mb-2  object-contain p-20 '>
          <div>
            {(selectedCategory === "men's clothing" ||
              selectedCategory === '') && (
              <Cards
                category={"men's clothing"}
                loading={loading}
                search={search}
                title={t('mensclothing')}
              />
            )}
          </div>
          <div>
            {(selectedCategory === 'jewelery' || selectedCategory === '') && (
              <Cards category={'jewelery'} loading={loading} search={search}  title={t('jwelry')} />
            )}
          </div>
          <div>
            {(selectedCategory === 'electronics' ||
              selectedCategory === '') && (
              <Cards
                category={'electronics'}
                loading={loading}
                search={search}
                title={t('Electronics')}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
