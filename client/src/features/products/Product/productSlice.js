import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ProductsAPI from 'api/ProductsAPI'

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async ({ id }, { rejectWithValue }) => {

    const { response, isError, errorMessage } = await ProductsAPI.getProduct(id)

    if (isError) {
      return rejectWithValue(errorMessage)
    }

    return response?.data
  }
)

const product = createSlice({
  name: 'product',
  initialState: {
    product: null,
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {
    resetProduct(state) {
      state.product = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.product = action.payload
      })
      .addCase(fetchProduct.pending, state => {
        state.isLoading = false
        state.isError = false
        state.error = null
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      })
  },
})

export const { resetProduct } = product.actions
export default product.reducer
