import { createSlice } from '@reduxjs/toolkit'
import { sortCategories } from 'features/products/ProductCatalog/ProductCatalogFilters/const'

const productCatalogSlice = createSlice({
  name: 'product-catalog-slice',
  initialState: {
    sortCategory: sortCategories.priceHighToLow,
    filters: {},
    cart: [],
  },
  reducers: {
    setSortCategory(state, action) {
      state.sortCategory = action.payload
    },
    setFilters(state, action) {
      state.filters = action.payload
    },
    resetFilters(state) {
      state.filters = {}
    },
    removeProductFromCart(state, action) {
      state.cart = state.cart.filter(({ id }) => id !== +action.payload.id)
    },
    setProductWithCount(state, action) {
      const productToAdd = {
        id: +action.payload.id,
        count: +action.payload.count
      }

      const currentProducts = state.cart
      const indexOfAddedProduct = currentProducts
        .findIndex(({ id: currentAddedProductId }) => currentAddedProductId === productToAdd.id)

      if (indexOfAddedProduct < 0) {
        state.cart = [
          ...state.cart.slice(),
          productToAdd
        ]

        return
      }
      const currentProductsCopy = currentProducts.slice()
      currentProductsCopy.splice(indexOfAddedProduct, 1, productToAdd)

      state.cart = currentProductsCopy
    }
  },
})

export const {
  setSortCategory,
  setFilters,
  resetFilters,
  removeProductFromCart,
  setProductWithCount,
} = productCatalogSlice.actions
export default productCatalogSlice.reducer
