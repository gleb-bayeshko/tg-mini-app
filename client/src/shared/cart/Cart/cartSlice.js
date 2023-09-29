import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserAPI } from 'api/UserAPI'

export const sendCartToInvoice = createAsyncThunk(
  'cart-slice/sendCartToInvoiceStatus',
  async (isPromoCode, { getState }) => {
    const { products } = getState().cart
    try {
      const { response } = await UserAPI.sendCartToInvoice(products)
      return response?.data.invoiceLink
    } catch (e) {
      return JSON.stringify(e.message)
    }

  }
)

const cartSlice = createSlice({
  name: 'cart-slice',
  initialState: {
    products: [],
    loading: false,
    isError: null,
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
        state.loading = false
        state.invoiceLink = action.payload
      })
      .addCase(sendCartToInvoice.pending, (state, action) => {
        state.loading = true
        state.isError = false
      })
      .addCase(sendCartToInvoice.rejected, (state, action) => {
        state.loading = false
        state.isError = true
      })
  },
})

export const {
  removeProductFromCart,
  addProductToCartWithCount,
  clearInvoiceLink,
} = cartSlice.actions

export default cartSlice.reducer
