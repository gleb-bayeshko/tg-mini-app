import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ProductsAPI from 'api/ProductsAPI'
import { sortCategories } from '../ProductCatalogFilters/const'

export const fetchProducts = createAsyncThunk(
  'product-catalog-slice/fetchProducts',
  async (params, { rejectWithValue }) => {

    const { response, isError, errorMessage } = await ProductsAPI.getProducts(params)

    if (isError) {
      return rejectWithValue(errorMessage)
    }

    return response?.data
  }
)

const productCatalogSlice = createSlice({
  name: 'product-catalog-slice',
  initialState: {
    sortCategory: sortCategories.priceHighToLow,
    filters: {},
    products: [],
    isLoading: false,
    isError: false,
    error: null,
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
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.pending, state => {
        state.isLoading = false
        state.isError = false
        state.error = null
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      })
  },
})

export const {
  setSortCategory,
  setFilters,
  resetFilters,
} = productCatalogSlice.actions
export default productCatalogSlice.reducer
