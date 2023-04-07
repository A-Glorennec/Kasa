import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Housing from './pages/Housing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/kasa/',
    element: <Home />,
  },
  {
    path: '/housing/:id',
    element: <Housing />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
