import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { loginApi, signupApi } from "../../apis/apis";

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
    console.log('eee-res', data)
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
    console.log('ddd', data)
    return signupApi(data).then((res) => {
        console.log('userrrrr', res)
        return res.data
    }).catch(err => console.log('userrr-err', err))
})

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
                console.log('kkkk-ful', action, state)
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
                console.log('kkkk-err', action, state)
                toast.error("user not found");

            });

            // signup

            builder.addCase(signup.fulfilled, (state, action) => {
                console.log('sss', action)
                state.token = action.payload?.encodedToken;
                localStorage.setItem("token", action.payload.encodedToken);

                state.user = action.payload?.createdUser;
                console.log('userrr', action.payload);
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

        }
    }
);
export const { logoutHandler } = authSlice.actions;

export default authSlice.reducer