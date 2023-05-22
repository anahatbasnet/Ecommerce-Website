import { useSelector } from 'react-redux'
import Cardsample from './Cardsample'
import Productshimmer from './Productshimmer'

export default function Cards({ category, loading }) {
  const items = useSelector(store => store.Products.products)
  const products = items?.filter(item => {
    return item?.category === category
  })

  return (
    <>
      <div className='flex justify-center  uppercase font-weight: 900 text-5xl max-[700]:flex max-[700]:justify-center '>
        {category}
      </div>
      {loading ? (
        <div className='flex flex-wrap object-contain ml-3  '>
          <Productshimmer />
          <Productshimmer />
          <Productshimmer />
          <Productshimmer />
        </div>
      ) : (
        <div className='flex flex-wrap object-contain ml-6  '>
          {products?.map(item => {
            return <Cardsample item={item} />
          })}
        </div>
      )}
    </>
  )
}
