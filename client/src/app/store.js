import { configureStore } from '@reduxjs/toolkit'
import drawerSlice from './AppLayout/Drawer/drawerSlice'

export const store = configureStore({ reducer: { drawer: drawerSlice }, })
