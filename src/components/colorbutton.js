import React from "react";

// Material ui
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Styles from "../styles/mui-styles";

const Colors = [
  "#e06b6c",
  "#ed373b",
  "#32a177",
  "#428d88",
  "#f5d9e6",
  "#f6c935",
  "#169776",
  "#8bc5f2",
  "#2ab6fb",
  "#c690dd",
  "#58b2d8",
  "#23313e",
];

const styles = () => ({
  button: {
    // width: "15px",
    // height: "15px",
  },
});

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btnColor: Colors[0], btnValue: 0 };
  }

  changeColor = () => {
    var { btnValue, btnColor } = this.state;

    btnValue === btnColor.length ? (btnValue = 0) : (btnValue = btnValue + 1);

    this.setState({
      btnColor: Colors[btnValue],
      btnValue,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={Styles}>
        <Button
          // className={classes.button}
          color="primary"
          variant="contained"
          onClick={() => this.changeColor()}
        />
      </MuiThemeProvider>
      //   <button
      //     style={{
      //       backgroundColor: this.state.btnColor,
      //       width: "30px",
      //       height: "30px",
      //     }}
      //     onClick={() => this.changeColor()}
      //   />
    );
  }
}

export default withStyles(styles)(ColorButton);
