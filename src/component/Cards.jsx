import { useSelector } from 'react-redux'
import Cardsample from './Cardsample'
import PropTypes from 'prop-types'
import Productshimmer from './Productshimmer'
import { useState } from 'react'

export default function Cards({ category, loading, search,title }) {
  const items = useSelector(store => store.Products.products)

  let filteredProducts = items
  const [shimmer, setShimmer] = useState(true)


  if (category && category !== '') {
    filteredProducts = filteredProducts?.filter(
      item => item.category === category
    )

  }

  return (
    <>
      {category && (
        <div className='flex justify-center text-sky-700 uppercase font-weight: 900 text-4xl md:mr-40 md:p-5 md:ml-1 '>
          {title}
        </div>
      )}
      {loading ? (
        <div className='flex flex-wrap object-contain ml-3'>
          <Productshimmer />
          <Productshimmer />
          <Productshimmer />
          <Productshimmer />
        </div>
      ) : (
        <div className='flex flex-wrap object-contain sm:ml-6'>
          {filteredProducts
            ?.filter(item =>
              search
                ? item.title.toLowerCase().includes(search.toLowerCase())
                : true
            )
            .map(item => (
              <Cardsample item={item} key={item.id}  />
            ))}
        </div>
      )}
    </>
  )
}
