import { createBrowserRouter } from 'react-router-dom'

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
import About from './pages/About'
import Modal from 'component/Modal'
import { element } from 'prop-types'
import Shipment from 'pages/Shipment'
import MensClothing from 'pages/Mensclothing'
import Jewelry from 'pages/Jewelry'
import Electronics from 'pages/Electronics'


const App = lazy(() => import('../src/App'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense
        fallback={
          <div className='m-auto flex justify-center w-[100%] h-[100vh] p-80'>
            <img src={logo} alt='loading...' />
          </div>
        }
      >
        <App/>
      </Suspense>
    ),
  },
  {
    path: '/purchase/:id',

    element: <Purchase/>,
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
  {
    path: '/about',
    element: <Protected Home={About} />,
  },
  {
    path:'/modal',
    element: <Modal />,

  },
  {
    path:'/shipment',
    element:<Shipment/>,
  },
  {
    path:"/men's clothing",
    element:<MensClothing/>
  },
  {
    path:"/jewelry",
    element:<Jewelry/>
  },
  {
    path:"/electronics",
    element:<Electronics/>
  },
  ,
])

export default router
