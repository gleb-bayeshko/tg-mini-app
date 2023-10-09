import { configureStore } from '@reduxjs/toolkit'
import productCatalogSlice from 'features/products/ProductCatalog/productCatalogSlice'
import drawerSlice from './AppLayout/Drawer/drawerSlice'

export const store = configureStore({
  reducer: {
    drawer: drawerSlice ,
    productCatalog: productCatalogSlice,
  },
})
