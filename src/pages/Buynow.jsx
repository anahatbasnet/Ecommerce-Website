import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
export default function Buynow() {
  const { buy } = useSelector(state => state.buynow)
  const { counter } = useSelector(state => state.Products)

  return (
    <>
      <Navbar />
      <div className='flex m-auto justify-center mt-28 items-center w-[60rem]  h-[40vh] border border-black- shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]   '>
        <div>
          <Link to = "/address">
          <div className=' border border-slate-950 border-3 m-2 items-center flex justify-center ml-10'>
            + Add New Delivery Address
          </div>
          </Link>
          <div className=' border border-slate-950 border-3  m-2 w-[40rem] h-[10rem] flex  ml-10  '>
            <img
              src={buy.image}
              alt=''
              className='object-content item-center m-5'
            />
            <div>
              <h2 className='font-bold text-sky-700 text-2xl mt-8  '>{buy.title}</h2>
              <h2>Quantity:{counter}</h2>
              <h2>Price: $ {buy.price * counter}</h2>
            </div>
          </div>
        </div>
     

        <div className=' border border-slate-950 border-3 mr-12 h-[12rem] w-[20rem] flex justify-center items-center flex-col '>
          <p>Total Payment: ${buy.price}</p>
          <Link to ="/order">
          <button className='border rounded-3xl h-10 w-24 m-2 bg-sky-600  text-white hover:bg-sky-700 '>
            Place Order
          </button>
          </Link>
        
        </div>
      </div>
    </>
  )
}
