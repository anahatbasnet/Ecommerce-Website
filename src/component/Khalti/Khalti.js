import KhaltiCheckout from 'khalti-checkout-web'
import config from './khaltiConfig'
import { useSelector } from 'react-redux'


export default function Khalti({price}) {
  let checkout = new KhaltiCheckout(config)
  const { buy } = useSelector(state => state.buynow)
  const { counter } = useSelector(state => state.Products)

  return (
    <button className='border p-2  bg-sky-700 text-slate-50 rounded-2xl w-[15rem] hover:bg-sky-600'
      onClick={() => checkout.show({amount: (price)*100 })}
     
   >Pay Via Khalti </button>
  )
}
