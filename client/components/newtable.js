import React from "react";
import { Route, Link } from "react-router-dom";

const NewTable = ({ match }) => (
  <div>
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

export default NewTable;
