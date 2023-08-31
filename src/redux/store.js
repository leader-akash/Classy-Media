import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./slice/authSlice"
import postReducer from './slice/postSlice';
import bookmarkReducer from './slice/bookmarkSlice';


export const  store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        bookmark: bookmarkReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});