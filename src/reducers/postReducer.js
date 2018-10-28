// file containing pure functions not related to backend service
// Reducers must be pure functions
// When an action type is matched with fire action, it will modify the Redux store and change the current state
// When errors occur, the reducer will fill the state with errors (can be displayed in the frontend)

//import { ADD_POST, DELETE_POST, FETCH_POST } from "../actions/types";
import {
  ADD_POST,
  DELETE_POST,
  FETCH_POST,
  GET_PRODUCTS,
} from "../actions/types";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];

    case GET_PRODUCTS:
      return action.payload; //puts in redux state

    case DELETE_POST:
      return state.filter(post => post._id !== action.payload.id);

    case FETCH_POST:
      return action.posts;

    default:
      return state;
  }
}
