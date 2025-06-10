import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { routes } from './routes'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './Components/Context'

import './index.css'


createRoot(document.getElementById('root')!).render(
  <>

    <Toaster position='top-center' />
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </>
)
