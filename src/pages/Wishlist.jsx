import { useSelector } from 'react-redux'
import Cardsample from '../component/Cardsample'
import Navbar from '../component/Navbar'
import {ImCross} from 'react-icons/im'

export default function Wishlist() {
  const { wish } = useSelector(state => state.wishlist)

  console.log(wish)
  return (
    <>
      <div className='sticky top-0 z-10 bg-white'>
        <Navbar />
      </div>
      <div className='wishlist'>
        <div className='title justify-center items-center text-5xl font-bold m-2 text-sky-700 '>
          <p className='flex justify-center '> Wishlist</p>
        </div>
        <div className='product flex flex-wrap justify-center'>
          {wish.length !== 0 ? (
            wish.map(item => {
              return <Cardsample item={item} />
            })
          ) : (
            <div className='flex justify-center p-10 text-rose-600 items-center'>
              <ImCross />
             <p className='p-5 text-lg '>No Items Here</p> 
            </div>
          )}
        </div>
      </div>
    </>
  )
}
