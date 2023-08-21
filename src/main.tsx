import { AuthProvider } from './contexts/auth.context.tsx'
import { AppoinmentsProvider } from './contexts/appoinments.context.tsx'
import { UsersProvider } from './contexts/users.context.tsx'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Router } from './Router.tsx'
import './scss/index.scss'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider >
      <AppoinmentsProvider>
        <UsersProvider>
          <RouterProvider router={Router} />
        </UsersProvider>
      </AppoinmentsProvider>
    </AuthProvider>
  </React.StrictMode>,
)
