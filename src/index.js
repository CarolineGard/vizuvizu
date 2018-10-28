import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Database
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { fetchAllPosts } from "./actions/index";
import ServiceWorker from "./serviceWorker";

import { BrowserRouter, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authentication";

// Create Redux store and apply redux-thunk middleware
// Middleware helps us to deal with Async action inside the redux store, such as AJAX or network requests through redux
// The compose function is used to display the data in the chrome extension, and the Redux application is here connected to that function

// const store = createStore(rootReducer, applyMiddleware(thunk));

//const inititalState = {};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

// dispatch the action that fetches all post from the server and put inside the redux store
// --> when the app loads the first time, any data in the database is obtained
// store.dispatch(fetchAllPosts());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

ServiceWorker();
