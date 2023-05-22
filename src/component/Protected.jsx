import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected(props) {
  const { Home } = props
  const navigate = useNavigate()
  let isLoggedIn = localStorage.getItem('isLoggedIn')

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn, navigate])

  return <>{isLoggedIn && <Home />}</>
}
