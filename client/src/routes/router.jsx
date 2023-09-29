import { createBrowserRouter } from 'react-router-dom'
import MainPage from 'pages/MainPage.jsx'
import { routerPath } from './const'


const router = createBrowserRouter([
  {
    path: routerPath.main,
    element: <MainPage />
  }
])

export default router
