import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import InvoiceAPI from 'api/InvoiceAPI'

export const sendCartToInvoice = createAsyncThunk(
  'cart-slice/sendCartToInvoice',
  async (isPromoCode, { getState, rejectWithValue }) => {
    const { products } = getState().cart

    const { response, isError, errorMessage } = await InvoiceAPI.createInvoice(products)

    if (isError) {
      return rejectWithValue(errorMessage)
    }

    return response?.data.invoiceLink
  }
)

const cartSlice = createSlice({
  name: 'cart-slice',
  initialState: {
    products: [],
    isLoading: false,
    isError: null,
    error: null,
    invoiceLink: null
  },
  reducers: {
    addProductToCartWithCount(state, action) {
      const productToAdd = {
        id: +action.payload.id,
        count: +action.payload.count,
        title: action.payload.name,
        price: action.payload.price,
      }

      const currentProducts = state.products
      const indexOfAddedProduct = currentProducts
        .findIndex(({ id: currentAddedProductId }) => currentAddedProductId === productToAdd.id)

      if (indexOfAddedProduct < 0) {
        state.products = [
          ...state.products.slice(),
          productToAdd
        ]

        return
      }
      const currentProductsCopy = currentProducts.slice()
      currentProductsCopy.splice(indexOfAddedProduct, 1, productToAdd)

      state.products = currentProductsCopy
    },
    removeProductFromCart(state, action) {
      state.products = state.products.filter(({ id }) => id !== +action.payload.id)
    },
    clearInvoiceLink(state) {
      state.invoiceLink = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendCartToInvoice.fulfilled, (state, action) => {
        state.isLoading = false
        state.invoiceLink = action.payload
      })
      .addCase(sendCartToInvoice.pending, (state, action) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(sendCartToInvoice.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      })
  },
})

export const {
  removeProductFromCart,
  addProductToCartWithCount,
  clearInvoiceLink,
} = cartSlice.actions

export default cartSlice.reducer
