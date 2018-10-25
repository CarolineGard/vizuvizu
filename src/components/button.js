import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Btn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, color } = this.props;
    return (
      <Button color={color} variant="extendedFab">
        {" "}
        {text}{" "}
      </Button>
    );
  }
}

export default Btn;
