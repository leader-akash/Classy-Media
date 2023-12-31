import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginApi = (data) => {
    return axios.post(`/api/auth/login`, data)
}

export const signupApi = (data) => {
    return axios.post(`/api/auth/signup`, data)
}

export const createPostApi = (token, postData) => {
    return axios.post(`api/posts`, {
        postData
    }, {
        headers: {
            authorization: token,
        },
    })
}

export const getPostByIdApi = (postId) => {
    return axios.get(`/api/posts/${postId}`)
}

export const getAllPostsApi = () => {
    return axios.get(`/api/posts`)
}

export const deletePostByIdApi = (token, postId) => {
    return axios.delete(`/api/posts/${postId}`, {
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
    
    return axios.post(`/api/posts/like/${postId}`,
        {}, {
        headers: {
            authorization: token
        }
    })

}

export const DeleteLikedPostByIdApi = (token, postId) => {
    return axios.post(`/api/posts/dislike/${postId}`, {}, {
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
    return axios.get(`/api/users/bookmark/`, {
        headers: {
            authorization: token
        }
    })
}


//  users api 

//  all users

export const getAllUsersApi = () => {
    return axios.get(`/api/users`);
}

export const getUserByIdApi = (userId) => {
    return axios.get(`/api/users/${userId}`);
}

//edit user

export const editUserApi = (token, userData) => {
    return axios.post(`/api/users/edit`,
        {
            userData
        }, {
        headers: {
            authorization: token
        }
    })
}

//follow/unfollow

export const followUserApi = (token, followUserId) => {
    return axios.post(`/api/users/follow/${followUserId}`,
        {},
        {
            headers: {
                authorization: token
            }
        })
}

export const unFollowUserApi = (token, followUserId) => {
    return axios.post(`/api/users/unfollow/${followUserId}`,
        {},
        {
            headers: {
                authorization: token
            }
        })
}


// comment section


export const getCommentsByPostIdApi = (postId) => {
    return axios.get(`/api/comments/${postId}`);
  };
  
  export const addCommentByPostIdApi = (token, data) => {
    return axios.post(
      `/api/comments/add/${data?.id}`,
      { commentData: data },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };

  export const deleteCommentByPostIdCommentIdApi = (token, postId, commentId) => {
    return axios.post(
      `/api/comments/delete/${postId}/${commentId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
  };
