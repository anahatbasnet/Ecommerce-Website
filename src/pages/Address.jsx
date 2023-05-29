import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../component/Button'
import { setInformation } from '../redux/Slice/addressslice'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

export default function Address() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [address, setAddress] = useState({
    fullname: '',
    phonenumber: '',
    emailaddress: '',

    state: '',
    city: '',
   
    landmark: '',
  })

  const handleAddress = e => {
    e.preventDefault()
    dispatch(setInformation(address))
    setAddress({
      fullname: '',
      phonenumber: '',
      emailaddress: '',

      state: '',
      city: '',
     
      landmark: '',
    })
    navigate('/order')
  }

  return (
    <>
         <div className='sticky top-0 z-10 bg-white'>
        <Navbar />
      </div>
      <div className='   bg-white shadow-md md:first-letter: p-20 '>
        <form
          className='space-y-4 font-semibold text-lg m-2 self-center  md:flex-col md:justify-evenly md:w-[70%] md:pl-[20%]'
          onSubmit={handleAddress}
        >
          <p className='p-2 m-c flex justify-center text-cyan-700 font-bold text-xl'>
            Shippment Details
          </p>
          <div className=' md:flex md:justify-around'>
            <div className='firstcol md:p-10 '>
              FullName:
              <input
                className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[7rem]md:w-[10rem]rounded-md  focus:ring-indigo-500 focus:border-indigo-500'
                type='text'
                placeholder='Enter your Full name'
                required
                value={address.fullname}
                onChange={e =>
                  setAddress({
                    ...address,
                    fullname: e.target.value,
                  })
                }
              />
              Phone Number:
              <input
                className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[8rem]focus:ring-indigo-500 focus:border-indigo-500'
                type='text'
                placeholder='Enter your Phone number'
                required
                value={address.phonenumber}
                onChange={e =>
                  setAddress({
                    ...address,
                    phonenumber: e.target.value,
                  })
                }
              />
              Email Address:
              <input
                className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[8rem]focus:ring-indigo-500 focus:border-indigo-500'
                type='text'
                placeholder='Enter your email address'
                required
                value={address.emailaddress}
                onChange={e =>
                  setAddress({
                    ...address,
                    emailaddress: e.target.value,
                  })
                }
              />
            </div>
            <div className='secondcol md:p-10'>
              Province:
              <input
                className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[8rem]focus:ring-indigo-500 focus:border-indigo-500'
                type='text'
                placeholder='Enter your Province'
                required
                value={address.state}
                onChange={e =>
                  setAddress({
                    ...address,
                    state: e.target.value,
                  })
                }
              />
              City:
              <input
                className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[8rem]focus:ring-indigo-500 focus:border-indigo-500'
                type='text'
                placeholder='Enter your City'
                value={address.city}
                required
                onChange={e =>
                  setAddress({
                    ...address,
                    city: e.target.value,
                  })
                }
              />
              LandMark(Optional)
              <input
                className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[8rem]focus:ring-indigo-500 focus:border-indigo-500'
                type='text'
                placeholder='Enter landmark (Optional)'
                
                value={address.landmark}
                onChange={e =>
                  setAddress({
                    ...address,
                    landmark: e.target.value,
                  })
                }
              />
            </div>
          </div>
<div className='pl-8'>

          <Button text={'Save'}  />
</div>
        </form>
      </div>
      <Footer />
    </>
  )
}
