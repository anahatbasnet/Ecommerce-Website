import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../assets/style/Modal.css'
import { setInformation } from '../redux/Slice/addressslice'
import Button from './Button'

export default function Modal({ toggleModal }) {
  const { Information } = useSelector(state => state.address)

  const dispatch = useDispatch()
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedAddress, setSelectedAddress] = useState('')

  const handleProvinceChange = event => {
    setSelectedProvince(event.target.value)
    setSelectedAddress('')
  }

  const handleAddressChange = event => {
    setSelectedAddress(event.target.value)
  }
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
    const updatedAddress = {
      ...address,
      state: selectedProvince,
      city: selectedAddress,
    }
    dispatch(setInformation(updatedAddress))
    toggleModal()

    setAddress({
      fullname: '',
      phonenumber: '',
      emailaddress: '',
      state: '',
      city: '',
      landmark: '',
    })
    setSelectedProvince('')
    setSelectedAddress('')
  }

  return (
    <>
      <div className='modal'>
        <div onClick={toggleModal} className='overlay'></div>
        <div className='modal-content top-[40%] left-[50%] '>
          <div className='  md:first-letter:  '>
            <form
              className='space-y-4 font-semibold text-lg m-2 self-center md:w-full md:flex-col md:justify-evenly'
              onSubmit={handleAddress}
            >
              <p className='p-2 m-c flex justify-center text-cyan-700 font-bold text-xl'>
                Shipment Details
              </p>
              <div className=' md:flex md:justify-around'>
                <div className='firstcol  '>
                  <div className='detail  pt-2 pb-2'>FullName:</div>
                  <input
                    className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[30rem]'
                    type='text'
                    placeholder='Enter your Full name'
                    required
                    value={address.fullname}
                    defaultValue={
                      Information?.fullname ? Information.fullname : ''
                    }
                    onChange={e =>
                      setAddress({
                        ...address,
                        fullname: e.target.value,
                      })
                    }
                  />
                  <div className='detail  pt-2 pb-2'>Phone Number:</div>
                  <input
                    className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[30rem] focus:ring-indigo-500 focus:border-indigo-500'
                    type='tel'
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
                  <div className='detail  pt-2 pb-2'>Email Address:</div>
                  <input
                    className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[30rem] focus:ring-indigo-500 focus:border-indigo-500'
                    type='email'
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

                <div className='secondcol '>
                  <div className='detail  pt-2 pb-2'>Province:</div>
                  <select
                    id='province'
                    value={selectedProvince}
                    onChange={handleProvinceChange}
                    className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[30rem] focus:ring-indigo-500 focus:border-indigo-500'
                  >
                    <option value=''>Select Province</option>
                    <option value='Province 1'>Province 1</option>
                    <option value='Province 2'>Province 2</option>
                    <option value='Bagmati Province'>Bagmati Province</option>
                    <option value='Gandaki Province'>Gandaki Province</option>
                    <option value='Province 5'>Province 5</option>
                    <option value='Karnali Province'>Karnali Province</option>
                    <option value='Sudurpashchim Province'>
                      Sudurpashchim Province
                    </option>
                  </select>
                  <div className='detail  pt-2 pb-2'>City:</div>

                  <select
                    id='address'
                    value={selectedAddress}
                    onChange={handleAddressChange}
                    className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[30rem] focus:ring-indigo-500 focus:border-indigo-500'
                  >
                    <option value=''>Select Address</option>

                    {selectedProvince === 'Province 1' && (
                      <>
                        <option value='Ilam '>Ilam</option>
                        <option value='Biratnagar'>Biratnagar</option>
                        <option value='Dhankuta'>Dhankuta</option>
                        <option value='Jhapa'>Jhapa</option>
                      </>
                    )}
                    {selectedProvince === 'Province 2' && (
                      <>
                        <option value='Janakpur'>Janakpur</option>
                        <option value='Parsa'>Parsa</option>
                        <option value='Siraha'>Siraha</option>
                        <option value='Bara'>Bara</option>
                      </>
                    )}
                    {selectedProvince === 'Bagmati Province' && (
                      <>
                        <option value='Kathmandu'>Kathmandu</option>
                        <option value='Laitpur'>Laitpur</option>
                        <option value='Bhaktapur '>Bhaktapur</option>
                        <option value='Chitwan '>Chitwan</option>
                      </>
                    )}
                    {selectedProvince === 'Gandaki Province' && (
                      <>
                        <option value='Pokhara '>Pokhara</option>
                        <option value='Gorkha '>Gorkha</option>
                        <option value='Kaski '>Kaski</option>
                        <option value='Mustang '>Mustang</option>
                      </>
                    )}

                    {selectedProvince === 'Province 5' && (
                      <>
                        <option value='Butwal '>Butwal</option>
                        <option value='Dang '>Dang</option>
                        <option value='Plapa '>Plapa</option>
                        <option value='Kapilbastu '>Kapilbastu</option>
                      </>
                    )}
                    {selectedProvince === 'Karnali Province' && (
                      <>
                        <option value='Birendranagar '>Birendranagar</option>
                        <option value='Jumla '>Jumla</option>
                        <option value='Surkhet '>Surkhet</option>
                        <option value='Dolpa '>Dolpa</option>
                      </>
                    )}
                    {selectedProvince === 'Sudurpashchim Province ' && (
                      <>
                        <option value='Dhangadhi '>Dhangadhi</option>
                        <option value='Bajhang '>Bajhang</option>
                        <option value='Doti '>Doti</option>
                        <option value='Kailali'>Kailali</option>
                      </>
                    )}
                  </select>
                  <div className='detail  pt-2 pb-2'>Address:</div>
                  <input
                    className='w-full px-4 py-2 rounded-md border-black border-2 md:w-[30rem] focus:ring-indigo-500 focus:border-indigo-500'
                    type='text'
                    placeholder='Enter Address'
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
              <Button text={'Save'} />
            </form>
          </div>
          <button className='close-modal' onClick={toggleModal}>
            CLOSE
          </button>
        </div>
      </div>
    </>
  )
}
