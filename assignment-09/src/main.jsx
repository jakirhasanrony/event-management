import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import router from './Routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
