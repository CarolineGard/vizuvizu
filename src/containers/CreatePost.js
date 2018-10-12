/* Higher order component of NewPost.js */

import { connect } from "react-redux";
import { createPost } from "../actions/index";
import NewPost, { newpost } from "../components/newPost";

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    },
  };
};

// Connect NewPost component to the Redux store
export default connect(
  null,
  mapDispatchToProps
)(NewPost);
