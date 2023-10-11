import { createSlice } from '@reduxjs/toolkit'
import { sortCategories } from 'features/products/ProductCatalog/ProductCatalogFilters/const'

const productCatalogSlice = createSlice({
  name: 'product-catalog-slice',
  initialState: {
    sortCategory: sortCategories.priceHighToLow,
    filters: {},
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
  },
})

export const {
  setSortCategory,
  setFilters,
  resetFilters,
} = productCatalogSlice.actions
export default productCatalogSlice.reducer
