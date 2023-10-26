import { configureStore } from '@reduxjs/toolkit'
import searchPageSlice from './slices/searchPageSlice'
import topicSlice from './slices/topicSlice'

export const store = configureStore({
  reducer: {
    search: searchPageSlice,
    topic: topicSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch