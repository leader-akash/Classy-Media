import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsersApi, getUserByIdApi } from '../../apis/apis';

const initialState = {
    usersData: [],
    loading: "idle",
    selectedUser: {},
    error: null,
}

export const getAllUsers = createAsyncThunk('users/getAllUsers', async()=>{
    console.log('ppppppp')
    try{
        const res = await getAllUsersApi();
        console.log('rrrr', res)
        return res?.data?.users
    }
    catch(err){
        console.log('eeee', err)
        // rejectWithValue(err)
    }
})

export const getUserById = createAsyncThunk('users/getUserById', async(userId, {rejectWithValue})=>{
    try{
        const token = localStorage.getItem('userinfo');
        const res = await getUserByIdApi(token, userId);
        console.log('fff',res)
        return res?.data?.user
    }
    catch(err){
        
        rejectWithValue(err);
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},

    extraReducers: (builder) => {

        // getAllUsers
        builder.addCase(getAllUsers.pending, (state)=>{
            state.loading = 'pending';
            state.usersData = [];
        })

        builder.addCase(getAllUsers.fulfilled, (state,action)=>{
            state.loading = 'success';
            console.log('payllll', action.payload)
            state.usersData = action.payload;
        })

        builder.addCase(getAllUsers.rejected, (state,action)=>{
            state.loading = 'rejected';
            state.error = action.error
        }) 

        //getUserById

        builder.addCase(getUserById.pending, (state)=>{
            state.loading = 'loading'
        })

        builder.addCase(getUserById.fulfilled, (state,action)=>{
            state.loading = 'success';
            state.selectedUser = action.payload?.user;
        })

        builder.addCase(getUserById.rejected, (state,action)=>{
            state.loading = 'rejected';
            state.error = action.error
        }) 


    }
})

export default userSlice.reducer;