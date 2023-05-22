import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Cartproduct({ cartproduct, onCheckboxChange, val }) {
  const [isChecked, setIsChecked] = useState(false)

  const { counter } = useSelector(state => state.Products)

  const handleCheckboxChange = event => {
    const isChecked = event.target.checked
    setIsChecked(isChecked)
    onCheckboxChange(event, cartproduct.id) 
  }

  return (
    <>
      <div className='m-6 flex  '>
        {!val && (
          <div className='checkbox'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
        )}

        <img
          src={cartproduct.image}
          alt=''
          className='w-28 object-contain mr-7'
        />
        <div className='flex-col'>
          <h1 className='text-xl font-bold '>{cartproduct?.title}</h1>
          <p>Quantity: {counter}</p>
          <p>Price: ${cartproduct?.price * counter}</p>
        </div>
      </div>
    </>
  )
}
