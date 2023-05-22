import { useSelector } from 'react-redux'
import Cardsample from '../component/Cardsample'
import Navbar from '../component/Navbar'

export default function Wishlist() {
  const { wish } = useSelector(state => state.wishlist)

  console.log(wish)
  return (
    <>
      <Navbar />
      <div className='wishlist'>
        <div className='title justify-center items-center text-5xl font-bold m-2 text-sky-700'>
          <p className='flex justify-center'> Wishlist</p>
        </div>
        <div className='product flex flex-wrap'>
          {wish !== [] ? wish.map(item => {
            
            return <Cardsample item={item} />
          }) : <p>NO items here</p>}
        </div>
      </div>
    </>
  )
}
