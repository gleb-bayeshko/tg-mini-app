import { createBrowserRouter } from 'react-router-dom'
import MainPage from 'pages/MainPage.jsx'
import { routerPath } from 'pages/routes/const.js'


const router = createBrowserRouter([
  {
    path: routerPath.main,
    element: <MainPage />
  }
])

export default router
