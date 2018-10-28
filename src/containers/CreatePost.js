/* Higher order component of NewPost.js */

import { connect } from "react-redux";
import { createPost, getProducts } from "../actions/index";
import NewPost, { newpost } from "../components/newPost";
import NewTable, { newtable } from "../components/newtable";

// container som lyssnar på redux
const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post)); //redux
    },

    getProducts: dispatch => {
      dispatch(getProducts()); //redux
    },
  };
};

// Connect NewPost component to the Redux store
export default connect(
  null,
  mapDispatchToProps
)(NewTable);
