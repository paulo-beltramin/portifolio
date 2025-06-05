import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './routes'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <>

    <Toaster position='top-center'/>
    <RouterProvider router={routes}></RouterProvider>
  </>
)
