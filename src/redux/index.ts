import { configureStore } from '@reduxjs/toolkit'
import bookcrudReducer from '../redux/features/book.slice'

export const store = configureStore({
    reducer: {
        bookcrudReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch