import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { bookmarkByIdApi, deleteBookmarkByIdApi, getAllUserBookmarksApi } from '../../apis/apis';


const initialState = {
    bookmarks: [],
    loading: "idle",
    error: "",
}

export const bookmarkPost = createAsyncThunk('bookmark/bookmarkPost', async (postId, {rejectWithValue})=> {
    try{
      const token = localStorage.getItem('token');
      const res = await bookmarkByIdApi(token, postId);
      console.log('111', res)
      return res?.data?.bookmarks?.reverse();
    } 
    catch(err){
      return rejectWithValue(err);
    }
})

export const removeBookmark = createAsyncThunk('bookmark/removeBookmark', async(postId, {rejectWithValue})=> {
  try{
    const token = localStorage.getItem('token');
    const res = await deleteBookmarkByIdApi(token, postId);
    return res?.data?.bookmarks?.reverse();
  }
  catch(err){
    return rejectWithValue(err);
  }
})

export const getAllBookmarks = createAsyncThunk('bookmark/getAllBookmarks', async({rejectWithValue}) => {
  try{
    const res = await getAllUserBookmarksApi();
    return res?.data?.bookmarks?.reverse();
  }
  catch(err){
    return rejectWithValue(err);
  }
})



const bookmarkSlice = createSlice({
    name : 'bookmark',
    initialState,
    reducers: {},

    extraReducers : (builder) => {
             // add bookmarks by id
    builder.addCase(bookmarkPost.pending, (state)=> {
        state.loading = 'loading'
    })

    builder.addCase(bookmarkPost.fulfilled, (state,action)=> {
      state.loading = 'success';
      state.bookmarks = action.payload
    })

    builder.addCase(bookmarkPost.rejected, (state,action)=> {
      state.loading = 'rejected';
      state.error = action.error;
      console.log('bookmark-err-builder', action)
    })


    // delete bookmark

    builder.addCase(removeBookmark.pending, (state)=>{
      state.loading = 'loading';
    })

    builder.addCase(removeBookmark.fulfilled, (state,action)=> {
      state.loading = 'success';
      state.bookmarks = action.payload;

    })

    builder.addCase(removeBookmark.rejected, (state,action)=> {
      state.loading = 'rejected';
      state.error= action.error;
      console.log('action', action)
    })

    // get all bookmarks

    builder.addCase(getAllBookmarks.pending, (state)=>{
      state.loading = 'loading';
    })

    builder.addCase(getAllBookmarks.fulfilled, (state,action)=> {
      state.loading = 'success';
      state.bookmarks = action.payload;

    })

    builder.addCase(getAllBookmarks.rejected, (state,action)=> {
      state.loading = 'rejected';
      state.error= action.error;
      console.log('action', action);
    })



    }
})


export default bookmarkSlice.reducer;