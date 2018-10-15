import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

// Database
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { fetchAllPosts } from "./actions/index";
import ServiceWorker from "./serviceWorker";

// Create Redux store and apply redux-thunk middleware
// Middleware helps us to deal with Async action inside the redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

// dispatch the action that fetches all post from the server and put inside the redux store
// --> when the app loads the first time, any data in the database is obtained
store.dispatch(fetchAllPosts());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

ServiceWorker();
