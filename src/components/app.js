// import React, { Component } from "react";
import React from "react";
import { Route, Link } from "react-router-dom";

import "../styles/App.css";

// destructar header från props: props.header
// Reusable components
const Header = ({ title }) => <h1> {title} </h1>;

const Content = ({ text }) => <p> {text} </p>;

const Home = () => (
  <div>
    <Header title="Home" />
    <Content text="Welcome to vizuvizu, the new and easy way for vizualizing data. lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum" />
  </div>
);

const Profile = () => (
  <div>
    <Header title="Profile" />
    <Content text="Login to your account" />
  </div>
);

const MyTables = () => (
  <div>
    <Header title="My Tables" />
    <Content text="Here you see your saved tables" />
  </div>
);

const NewTable = ({ match }) => (
  <div>
    <Header title="Create new table" />
    <Content text="Here you can create a new table" />

    <ul>
      <li>
        <Link to={`${match.url}/create`}>CREATE!</Link>
      </li>
      <li>
        <Link to={`${match.url}/delete`}>DELETE!</Link>
      </li>
    </ul>

    <Route
      exact
      path={`${match.path}/:newtable`}
      render={({ match }) => <div> A table is {match.params.newtable} </div>}
    />
  </div>
);

const CreatedTable = () => (
  <div>
    <Header title="A new created table" />
    <Content text="Here you can create a new table" />
  </div>
);

// Stateless function, pure
const App = () => (
  <div>
    <Header title="vizuvizu" />

    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/mytables">MyTables</Link>
      </li>
      <li>
        <Link to="/newtable">NewTable</Link>
      </li>
    </ul>

    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/mytables" component={MyTables} />
    <Route path="/newtable" component={NewTable} />
  </div>
);

export default App;
