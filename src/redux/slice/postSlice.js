import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { DeleteLikedPostByIdApi, addCommentByPostIdApi, createPostApi, deleteCommentByPostIdCommentIdApi, deletePostByIdApi, getAllPostsApi, getCommentsByPostIdApi, getPostByIdApi, getPostByUsername, likePostByIdApi } from '../../apis/apis';
import { toast } from 'react-toastify';


const initialState = {
  loading: 'idle',
  posts: [],
  currentPost: null,
  postActionLoading: 'idle',
  postByUsername: [],
  error: '',
}

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData) => {
    try {
      const token = localStorage.getItem('token');
      const res = await createPostApi(token, postData);
      return res?.data?.posts?.reverse();
    }
    catch (err) {
      // toast.error('unable to post');
    }
  }
)
//here
export const getPost = createAsyncThunk('post/getPost', async (postId) => {
  try {
    const res = await getPostByIdApi(postId);
    return res?.data?.post
  }
  catch (err) {
    // toast.error('Unable to get post');
  }
})

export const getAllposts = createAsyncThunk('post/getAllPosts', async () => {
  try {
    const res = await getAllPostsApi();
    return res?.data?.posts?.reverse();
  }
  catch (err) {
    console.log('posts-notfound', err)
  }
});

export const deletePostById = createAsyncThunk('posts/deletepostById', async (postId, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const res = await deletePostByIdApi(token, postId);
    return res?.data?.posts?.reverse();
    
  }
  catch (err) {
    rejectWithValue(err)
  }
})


export const getAllPostsByUsername = createAsyncThunk('posts/getAllPostsByUsername', async(username, {rejectWithValue})=>{
  try{
    const res = await getPostByUsername(username);
    return res?.data?.posts?.reverse();
  }
  catch(err){
    rejectWithValue(err);
  }
})


export const likePost = createAsyncThunk('post/likePost', async (postId, {rejectWithValue}) => {
  try{
    const token = localStorage.getItem('token');
    const res = await likePostByIdApi(token, postId);
    return res?.data?.posts?.reverse();
  }
  catch(err){
    console.log('like-err', err)
    return rejectWithValue(err);
  }
})

export const dislikePost = createAsyncThunk('post/dislikePost', async (postId, {rejectWithValue})=>{
  try{
    const token = localStorage.getItem('token');
    const res = await DeleteLikedPostByIdApi(token, postId);
    return res?.data?.posts?.reverse();
  }
  catch(err){
    return rejectWithValue(err);
  }
});

// add Comment
export const addCommentByPostId = createAsyncThunk(
  "posts/addCommentByPostId",
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await addCommentByPostIdApi(token, data);
      toast.success("comment added successfully!");
      return res?.data?.posts?.reverse();

    } catch (error) {
      console.log("com-err", data);
      return rejectWithValue(error);
    }
  })

// get comments
export const getCommentsByPostId = createAsyncThunk(
  "posts/getCommentsByPostId",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await getCommentsByPostIdApi(token, postId);
      console.log('comm-res', res)
      return res?.data?.comments?.reverse();
    } catch (error) {
      console.log('comm-err', error)
      return rejectWithValue(error);
    }
  }
);

// delete comments
export const deleteCommentByPostIdCommentId = createAsyncThunk(
  "posts/deleteCommentByPostIdCommentId",
  async ({ postId, commentId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await deleteCommentByPostIdCommentIdApi(
        token,
        postId,
        commentId
      );

      return response?.data?.posts?.reverse();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);




const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    
    // create post
    builder.addCase(createPost.pending, (state) => {
      state.loading = 'loading'
    });

    builder.addCase(createPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = 'success';
      toast.success("Post created successfully");
    });
    builder.addCase(createPost.rejected, (state, action) => {
      console.log('createpost-err', action)
      state.error = action.error;
      state.loading = 'rejected';
    })

    // get post by id
    builder.addCase(getPost.pending, (state) => {
      state.postActionLoading = "loading";
    });

    builder.addCase(getPost.fulfilled, (state, action) => {
      state.postActionLoading = "success";
      state.currentPost = action.payload;
      console.log('ggggggggg', action.payload)
    })

    builder.addCase(getPost.rejected, (state, action) => {
      state.postActionLoading = "rejected";
      state.error = action.error;
    })

    // getAllPosts 
    builder.addCase(getAllposts.pending, (state) => {
      state.loading = 'loading';
    })

    builder.addCase(getAllposts.fulfilled, (state, action) => {
      state.loading = 'success';
      state.posts = action.payload;
    });

    builder.addCase(getAllposts.rejected, (state, action) => {
      state.loading = 'rejected';
      state.error = action.error;
    })

    // delete post by id

    builder.addCase(deletePostById.pending, (state) => {
      state.loading = 'loading'
    })

    builder.addCase(deletePostById.fulfilled, (state, action) => {
      state.loading = 'success';
      state.posts = action.payload;
    })

    builder.addCase(deletePostById.rejected, (state, action) => {
      state.loading = 'rejected';
      state.error = action.error;
    })

    // get posts by username

    builder.addCase(getAllPostsByUsername.pending, (state) => {
      state.loading = 'loading'
    })

    builder.addCase(getAllPostsByUsername.fulfilled, (state, action) => {
      state.loading = 'success';
      state.postByUsername = action.payload;
    })

    builder.addCase(getAllPostsByUsername.rejected, (state, action) => {
      state.loading = 'rejected';
      state.error = action.error;
    })

    // like post

    builder.addCase(likePost.pending, (state)=>{
      state.loading = 'loading'
    })

    builder.addCase(likePost.fulfilled, (state,action)=> {
      state.loading = 'success';
      state.posts = action.payload;

    })

    builder.addCase(likePost.rejected, (state,action)=> {
      state.loading = 'rejected';
      state.error = action.error;
      console.log('like-err-builder', action)
    })

    // dislike post

    builder.addCase(dislikePost.pending, (state)=>{
      state.loading = 'loading';
    })

    builder.addCase(dislikePost.fulfilled, (state,action)=> {
      state.loading = 'success';
      state.posts = action.payload;

    })

    builder.addCase(dislikePost.rejected, (state,action)=> {
      state.loading = 'rejected';
      state.error= action.error;
      console.log('action', action)
    })

    
    // add comment
    builder.addCase(addCommentByPostId.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(addCommentByPostId.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = "success";
    });
    builder.addCase(addCommentByPostId.rejected, (state, action) => {
      state.error = action.error;
      state.loading = "rejected";
    });

    // get comment
    builder.addCase(getCommentsByPostId.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getCommentsByPostId.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = "success";
    });
    builder.addCase(getCommentsByPostId.rejected, (state, action) => {
      console.log("com-error", action);
      state.error = action.error;
      state.loading = "rejected";
    });

    // delete comment
    builder.addCase(deleteCommentByPostIdCommentId.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(
      deleteCommentByPostIdCommentId.fulfilled,
      (state, action) => {
        state.posts = action.payload;
        state.loading = "success";
        toast.success("Comment deleted!");
      }
    );
    builder.addCase(
      deleteCommentByPostIdCommentId.rejected,
      (state, action) => {
        console.log("action-error", action);
        state.error = action.error;
        state.loading = "rejected";
      }
    );

   
  }
})

export default PostSlice.reducer;