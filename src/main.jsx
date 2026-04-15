import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Layout/RootLayout'
import Homepage from './pages/homepage/Homepage'
import AllFriends from './pages/friends/AllFriends'
import Timeline from './pages/timeline/Timeline'
import Stats from './pages/stats/Stats'
import NotFound from './pages/NotFoundPage/NotFoundPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          // path: '/',
          index: true,
          element: <Homepage />
        },
        {
          path: '/timeline',
          element: <Timeline />
        },
        {
          path: '/stats',
          element: <Stats />
        },
        {
          path: '/friends',
          element: <AllFriends />
        }
      ],
      errorElement: <NotFoundPage />
    },
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
