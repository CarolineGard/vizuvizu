/* Higher order component of NewPost.js */

import { connect } from "react-redux";
import { getProducts, deletePost } from "../actions/index";

import MyCharts from "../components/myCharts";

const mapStateToProps = state => ({
  posts: state.posts, //redux
});

// container som lyssnar på redux
const mapDispatchToProps = {
  getProducts,
  deletePost,
};

// Connect NewPost component to the Redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCharts);
