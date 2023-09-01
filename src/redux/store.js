import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./slice/authSlice"
import postReducer from './slice/postSlice';
import bookmarkReducer from './slice/bookmarkSlice';
import userReducer from './slice/userSlice';


export const  store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        bookmark: bookmarkReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});