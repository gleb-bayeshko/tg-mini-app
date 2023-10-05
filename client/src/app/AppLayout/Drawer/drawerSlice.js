import { createSlice } from '@reduxjs/toolkit'

const drawerSlice = createSlice({
  name: 'overlay',
  initialState: { isDrawerOpened: false },
  reducers: {
    openDrawer(state) {
      state.isDrawerOpened = true
    },
    closeDrawer(state) {
      state.isDrawerOpened = false
    },
    toggleDrawer(state) {
      state.isDrawerOpened = !state.isDrawerOpened
    },
  },
})

export const { openDrawer, closeDrawer, toggleDrawer } = drawerSlice.actions
export default drawerSlice.reducer
