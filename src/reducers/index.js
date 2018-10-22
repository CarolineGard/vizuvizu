import { combineReducers } from "redux";
import posts from "./postReducer";
import errors from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  posts: posts,
  errors: errors,
  auth: authReducer,
});
