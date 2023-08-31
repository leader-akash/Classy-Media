import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginApi = (data) => {
    return axios.post(`/api/auth/login`, data)
}

export const signupApi = (data) => {
    return axios.post(`/api/auth/signup`, data)
}

export const createPostApi = (token, postData) => {
    return axios.post(`api/posts`,{
        postData
    },{
        headers: {
            authorization: token,
        },
    })    
}

export const getPostByIdApi = (postId)=>{
    return axios.get(`/api/posts/${postId}`)
}

export const getAllPostsApi = ()=>{
    return axios.get(`/api/posts`)
}

export const deletePostByIdApi = (token, postId) => {
    return axios.delete(`/api/posts/${postId}`,{
        headers: {
            authorization: token
        }
    })
}

// get post by username

export const getPostByUsername = (username) => {
    return axios.get(`/api/posts/user/${username}`)
}

// like apis

export const likePostByIdApi = (token, postId) => {
    console.log('ppppp', postId, token)
    return axios.post(`/api/posts/like/${postId}`,
    {},{
        headers: {
            authorization: token
        }
    })
   
} 

export const DeleteLikedPostByIdApi = (token, postId) => {
    return axios.post(`/api/posts/dislike/${postId}`,{},{
        headers: {
            authorization: token
        }
    })
} 

// bookmarks api
export const bookmarkByIdApi = (token, postId) => {
    return axios.post(`/api/users/bookmark/${postId}`, 
    {},
     {
        headers: {
            authorization: token
        }
    })
}

export const deleteBookmarkByIdApi = (token, postId) => {
    return axios.post(`/api/users/remove-bookmark/${postId}`,
    {}, 
    {
        headers: {
            authorization: token
        }
    })
}

export const getAllUserBookmarksApi = (token) => {
    return axios.get(`/api/users/bookmark/`,{
        headers: {
            authorization: token
        }
    })
}