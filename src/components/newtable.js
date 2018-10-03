import React from "react";
import { Route, Link } from "react-router-dom";
import Input from "./testForm";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./mui-styles";
import Btn from "./button";

/*
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
    <Input />

    <Route
      exact
      path={`${match.path}/:newtable`}
      render={({ match }) => <div> A table is {match.params.newtable} </div>}
    />
  </div>
);
*/

class NewTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentNr: 0,
      done: false,
    };
  }

  render() {
    return (
      <div className="A new table">
        <Btn />
        <h1>Create a new table</h1>
      </div>
    );
  }
}

export default NewTable;
