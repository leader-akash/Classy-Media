import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { editUserApi, followUserApi, loginApi, signupApi, unFollowUserApi } from "../../apis/apis";

const initialState = {
    status: 'idle',
    user: (localStorage.getItem('userinfo') && JSON.parse(localStorage.getItem('userinfo')))|| {},
    error: "",
    token: localStorage.getItem("token") || "",
}

// export const loginUser = createAsyncThunk('auth/loginUser', async (e, data, {rejectWithValue}) => {
//     console.log('eee-res', e, data)

//     try{
//     const res = await loginApi( e.target.value === "guest" ?
//         {
//             username: "akash123",
//             password: "akash123",
//           }
//         : data

//     )
//     console.log('eee', res, e, data)
//     return res?.data
// }
// catch(err){
//     rejectWithValue(err)
//     console.log('rrrrr', err)
// }
// })


export const loginUser = createAsyncThunk('auth/loginUser', async (data, { rejectWithValue }) => {
    try {
        const res = await loginApi(data);

        return res?.data;
    }
    catch (err) {
        console.log('eee', err)
        return rejectWithValue(err)
    }
})

export const signup = createAsyncThunk('auth/signup', (data) => {
    return signupApi(data).then((res) => {
        return res.data
    }).catch(err => console.log('userrr-err', err))
})


export const editUser = createAsyncThunk('auth/editUser', async(userData, {rejectWithValue})=>{
    try{
        const token = localStorage.getItem('token');
        const res = await editUserApi(token, userData);
        return res?.data?.user
    }
    catch(err){
        rejectWithValue(err);
    }
})


export const followUser = createAsyncThunk('auth/followUser', async(followUserId, {rejectWithValue})=>{
    try{
        const token = localStorage.getItem('token');
        const res = await followUserApi(token, followUserId)
        toast.success('followed')
        return res?.data?.followUser
    }
    catch(err){
        rejectWithValue(err)
    }
});

export const unFollowUser = createAsyncThunk('auth/unFollowUser', async(id, {rejectWithValue})=>{
    try{
        const token = localStorage.getItem('token');
        const res = await unFollowUserApi(token, id);
        toast.success('unfollowed')
        return res?.data?.followUser
    }
    catch(err){
        rejectWithValue(err)
    }
});






const authSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers: {
            logoutHandler: () => {
                localStorage.clear();
                return {
                    user: null,
                    token: null,
                }
            }
        },
        extraReducers: (builder) => {
            // login 
            builder.addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload?.encodedToken;
                localStorage.setItem("token", state?.token)
                state.user = action.payload?.foundUser;
                localStorage.setItem("userinfo", JSON.stringify(state.user));

                toast.success("LoggedIn successfully");
                state.loading = "success";
                state.error = "";
            });

            builder.addCase(loginUser.rejected, (state, action) => {
                state.loading = "rejected";
                state.user = {}
                state.error = action.error.message;
                toast.error("user not found");

            });

            // signup

            builder.addCase(signup.fulfilled, (state, action) => {
                state.token = action.payload?.encodedToken;
                localStorage.setItem("token", action.payload.encodedToken);

                state.user = action.payload?.createdUser;
                localStorage.setItem("userinfo", JSON.stringify(state.user));
                toast.success("Loggedin Successfully");
                state.loading = 'success';
                state.error = "";
            })

            builder.addCase(signup.rejected, (state, action) => {
                state.loading = "rejected";
                toast.error("user not found");
                state.user = {};
                state.error = action.error.message
            })

            // editUser

            builder.addCase(editUser.pending, (state)=>{
                state.loading = 'loading'
            })

            builder.addCase(editUser.fulfilled, (state,action)=>{
                state.loading = 'success';
                state.user = action.payload;
                localStorage.setItem('userinfo', JSON.stringify(state.user));
                toast.success("updated successfully");
                state.error = '';
            })

            builder.addCase(editUser.rejected, (state,action)=>{
                state.loading = 'failed';
                state.error = action.error;
            })

            //followUser

            builder.addCase(followUser.fulfilled, (state,action)=>{
                state.loading='success';
                console.log('abbbb', action.payload)
                state.user.following = [...state?.user?.following, action.payload];
                
                state.error = '';
            })

            builder.addCase(followUser.rejected, (state,action)=>{
                state.loading='rejected';
                state.error = action.error
            })

            //unfollow User

            builder.addCase(unFollowUser.fulfilled, (state,action)=>{
                state.loading='success';
                state.user.following = state.user?.following.filter(
                    (item) => item?.username !== action.payload?.username
                  );
                state.error = '';
            })

            builder.addCase(unFollowUser.rejected, (state,action)=>{
                state.loading='rejected';
                state.error = action.error;

            })



        }
    }
);
export const { logoutHandler } = authSlice.actions;

export default authSlice.reducer