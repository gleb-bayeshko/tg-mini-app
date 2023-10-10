import { createBrowserRouter, Navigate, redirect } from 'react-router-dom'
import App from 'app/App'
import CartPage from 'pages/CartPage'
import MainPage from 'pages/MainPage.jsx'
import ProductPage from 'pages/ProductPage.jsx'
import ProductsPage from 'pages/ProductsPage.jsx'
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
            loader: handleProductCategoryLoader,
          },
          {
            path: ':category/:id',
            element: <ProductPage />,
          }
        ]
      },
      {
        path: routerPath.cart,
        element: <CartPage />
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
