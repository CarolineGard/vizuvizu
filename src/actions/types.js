// When the user submits the form, these functions are called.

// Called when a form is submitted.
// The action calls the reducer function and add the value to the Redux store
export const ADD_POST = "ADD_POST";
// When deleting any post, the delete action is triggered
export const DELETE_POST = "DELETE_POST";

// When the page loads, the fetch_post action is initialized
// and fetch all the data from the server and save it inside Redux store
export const FETCH_POST = "FETCH_POST";
