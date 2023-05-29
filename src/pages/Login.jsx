import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../component/Button'

export default function Login() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    username: '',
    password: '',
  })

  const handleLogin = e => {
    e.preventDefault()
    const storedUser = JSON.parse(localStorage.getItem('user'))

    if (
      storedUser &&
      storedUser.username === input.username &&
      storedUser.password === input.password
    ) {
      localStorage.setItem('isLoggedIn', true)
      navigate('/')
    } else {
      alert('Invalid username or password')
    }
  }

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')

    if (isLoggedIn) {
      navigate('/')
    }
  }, [navigate])

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 '>
      <div className='w-full max-w-md'>
        <div className='text-5xl font-semibold text-sky-700 text-center m-8'>
          <p>Login</p>
        </div>
        <form
          className='bg-white rounded shadow-md p-16'
          onSubmit={handleLogin}
        >
          <div className='mb-4'>
            <label htmlFor='username' className='block font-semibold mb-2'>
              Username:
            </label>
            <input
              name='username'
              value={input.username}
              onChange={e =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type='text'
              id='username'
              placeholder='Enter your username'
              className='border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block font-semibold mb-2'>
              Password:
            </label>
            <input
              name='password'
              value={input.password}
              type='password'
              id='password'
              onChange={e =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder='Enter your password'
              className='border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='flex justify-center'>
            <Button text='Login' />
          </div>
          <p className='mb-4 flex justify-center p-2'>
            Don't have an account?
            <span className='text-sky-700'>
              <Link to='/signup'>Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}
