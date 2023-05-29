import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../component/Button'

export default function Register() {
  const [input, setInput] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(input))
    if (input.password === input.confirmPassword) {
      navigate('/Login')
    } else {
      alert("Password didn't Matched")
    }
  }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='w-full max-w-md'>
        <div className='text-5xl font-semibold text-sky-700 text-center m-8 '>
          Register
        </div>
        <div className='bg-white rounded shadow-md p-8'>
          <form className='flex flex-col space-y-4 ' onSubmit={handleSubmit}>
            <label htmlFor='Username' className='font-semibold'>
              Username
            </label>
            <input
              name='username'
              type='text'
              value={input.username}
              onChange={e =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder='Enter a username'
              className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />

            <label htmlFor='Name' className='font-semibold'>
              Name
            </label>
            <input
              name='name'
              value={input.name}
              onChange={e =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type='text'
              placeholder='Enter your Name'
              className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />

            <label htmlFor='Email' className='font-semibold'>
              Email
            </label>
            <input
              name='email'
              value={input.email}
              onChange={e =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type='email'
              placeholder='Enter your email address'
              className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />

            <label htmlFor='Password' className='font-semibold'>
              Password
            </label>
            <input
              name='password'
              value={input.password}
              onChange={e =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type='password'
              placeholder='Create your Password'
              className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />

            <label htmlFor='ConfirmPassword' className='font-semibold'>
              Confirm Password
            </label>
            <input
              name='confirmPassword'
              type='password'
              value={input.confirmPassword}
              onChange={e =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
              placeholder='Confirm your Password'
              className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />

            <p className='text-center'>
            <div className='flex justify-center'>
              <Button text={'Register'} />
            </div>
              Go to{' '}
              <span className='text-sky-700'>
                <Link to='/login'>Log in Page</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
