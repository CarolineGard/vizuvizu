import { combineReducers } from "redux";
import posts from "./postReducer";

console.log("reducers/index.js!!!!!!!!!!!!!!!!!!!");

export default combineReducers({
  posts: posts,
});
