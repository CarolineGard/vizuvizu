// Database
import { ADD_POST, DELETE_POST, FETCH_POST } from "./types";
import axios from "axios";

// Login and Register
import { combineReducers } from "redux";

const apiUrl = "http://localhost:1234/products";

export const createPost = ({ name, description }) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/create`, { name, description })
      .then(response => {
        dispatch(createPostSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createPostSuccess = data => {
  return {
    type: ADD_POST,
    payload: {
      _id: data._id,
      name: data.name,
      description: data.description,
    },
  };
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id,
    },
  };
};

export const deletePost = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchPosts = posts => {
  return {
    type: FETCH_POST,
    posts,
  };
};

export const fetchAllPosts = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(fetchPosts(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

// Login and Register
export default combineReducers({});
