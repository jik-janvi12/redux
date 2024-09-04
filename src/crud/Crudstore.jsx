import { configureStore } from '@reduxjs/toolkit'
import CountSlice from './CountSlice'

export default configureStore({
  reducer: {
    counter: CountSlice
  }
})