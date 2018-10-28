/*
    An AJAX request is sent to the node.js server. 
    (All database operations needs to be inside the actions folder to not violate pure functions)
    Any occurred errors will lead to the actions being dispatched, and the reducer will handle the error
*/

import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../setAuthToken";
import jwt_decode from "jwt-decode";

//const apiUrl = "http://localhost:1234"; //${apiUrl}

export const registerUser = (user, history) => dispatch => {
  axios
    .post("/api/users/register", user)
    .then(res => history.push("/login"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const LoginUser = user => dispatch => {
  axios
    .post("/api/users/login", user)
    .then(res => {
      //console.log(res.data);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
