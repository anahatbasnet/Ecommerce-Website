import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import router from './router'
import { Provider } from 'react-redux'
// import { store } from './redux/Store/store'

import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'
import store from './redux/Store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()