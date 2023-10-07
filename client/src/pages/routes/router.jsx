import { createBrowserRouter, Navigate, redirect } from 'react-router-dom'
import App from 'app/App'
import MainPage from 'pages/MainPage.jsx'
import ProductsPage from 'pages/ProductsPage'
import { routerPath } from 'pages/routes/const.js'
import { productCategories } from 'shared/const/productCategories.js'

const router = createBrowserRouter([
  {
    path: routerPath.home,
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
        errorElement: <div>ERROR</div>,
      },
      {
        path: routerPath.products,
        children: [
          {
            index: true,
            element: <Navigate to={productCategories.all} />,
          },
          {
            path: ':category',
            element: <ProductsPage />,
            loader: handleProductCategoryLoader
          }
        ]
      }
    ]
  },
])

function handleProductCategoryLoader({ params }) {
  if (!productCategories[params.category]) {
    return redirect(routerPath.products)
  }

  return null
}

export default router
