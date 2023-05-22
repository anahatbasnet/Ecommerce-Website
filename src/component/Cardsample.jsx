import { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setWish, setremoveWish } from '../redux/Slice/wishlist'

export default function Cardsample({ item }) {
  const dispatch = useDispatch()
  const [red, setRed] = useState(false)

  const { wish } = useSelector(state => state.wishlist)

  const redheart = () => {
    setRed(!red)

    if (!red) {
      dispatch(setWish(item))
    } else {
      dispatch(setremoveWish(item))
    }
  }
  useEffect(() => {
    wish.forEach(element => {
      if (element.id === item.id) {
        setRed(true)
      }
    })
    // eslint-disable-next-line
  }, [wish])

  return (
    <div className='m-5 border-black border w-[20rem] max-[700px]:m-2 rounded-2xl '>
      <button className='p-2' onClick={redheart}>
        {red ? (
          <AiOutlineHeart size={30} style={{ color: 'red' }} />
        ) : (
          <AiOutlineHeart size={30} />
        )}
      </button>
      <Link to={`/purchase/${item?.id}`}>
        <img
          src={item?.image}
          alt='product'
          className='w-[18rem] h-[24rem] flex p-5 justify-center ml-5 object-contain '
        />

        <p className='flex justify-center font-bold text-2xl items-center text-center m-4'>
          {item?.title}
        </p>

        <div className='flex justify-between m-2'>
          <p className='flex items-center'>
            <AiFillStar />
            {item?.rating?.rate}
          </p>
          <p className='flex justify-center font-bold items'>
            PRICE: ${item?.price}
          </p>
          <p className='flex items-center'>
            <BsFillPersonFill />
            {item?.rating?.count}
          </p>
        </div>
      </Link>
    </div>
  )
}
