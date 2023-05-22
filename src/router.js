import { createBrowserRouter, Route } from 'react-router-dom'

import Purchase from './pages/Productdetail'
import Buynow from './pages/Buynow'
import Addcart from './pages/Addcart'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Register from './pages/Register'
import Login from './pages/Login'
import Protected from './component/Protected'
import Order from './pages/Order'
import Address from './pages/Address'
import Checkout from './pages/Checkout'
import Deliverypage from './pages/Deliverypage'
import logo from './assets/Images/logo.png'
import { lazy, Suspense } from 'react'

const App = lazy(() => import('../src/App'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense
        fallback={
          <div className='m-auto flex justify-center w-[100%] h-[100vh] p-80'>
            <img src={logo} />
          </div>
        }
      >
        <Protected Home={App} />
      </Suspense>
    ),
  },
  {
    path: '/purchase/:id',

    element: <Protected Home={Purchase} />,
  },
  {
    path: '/buynow',
    element: <Protected Home={Buynow} />,
  },
  {
    path: '/addtocart',
    element: <Protected Home={Addcart} />,
  },
  {
    path: '/cart',
    element: <Protected Home={Cart} />,
  },
  {
    path: '/wishlist',
    element: <Protected Home={Wishlist} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/address',
    element: <Address />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/delivery',
    element: <Deliverypage />,
  },
])

export default router
