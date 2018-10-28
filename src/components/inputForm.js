import React from "react";
//Material-ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//icons
//import Icon from "@material-ui/core/Icon";
//import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

import ColorButton from "./colorbutton";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Styles from "../styles/mui-styles";

//const Theme = theme => ({ --> theme.spacing.unit
const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    height: 140,
    width: 500,
  },

  control: {
    padding: theme.spacing.unit * 2,
  },

  button: {
    margin: "10px",
    padding: "10px",
    fontSize: "13px",
  },

  buttonSquare: {
    margin: "10px",
    width: "10px",
    height: "10px",
  },

  inputField: {
    margin: "10px",
    width: "110px",
  },

  icon: {
    fontSize: "25px",
  },
});

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { column: [], tempX: [], tempY: [], tempS: [], data: [] };
  }

  clickStart = () => {
    this.setState({ start: true });
  };

  handleClick = () => {
    this.setState({ column: this.state.column + 1 });
  };

  addNewField = () => {
    const { column } = this.state;
    column.push([]); // Adds new empty field array to the big array
    this.setState(column);
  };

  deleteField = index => {
    const { column } = this.state;
    column.splice(index, 1); // delete one row on position index
    this.setState(column);
  };

  handleInputChange = (event, index, type) => {
    const { tempX, tempY, tempS } = this.state;

    type === "x" && (tempX[index] = event.target.value);
    type === "y" && (tempY[index] = event.target.value);
    type === "s" && (tempS[index] = event.target.value);

    this.setState({ tempX, tempY }); // sets temp to current value
  };

  addNewValue = index => {
    const { column, tempX, tempY, tempS } = this.state;

    var s = 0;
    tempS[index] != null && tempS[index] !== "" && (s = parseInt(tempS[index]));

    (tempX[index] != null || tempX[index] !== "") &&
      (tempY[index] != null || tempY[index] !== "") &&
      column[index].push({
        x: parseInt(tempX[index]),
        y: parseInt(tempY[index]),
        size: s,
        opacity: 0.2,
      });

    tempX[index] = "";
    tempY[index] = "";
    tempS[index] = "";

    // Send data to parent component
    this.props.onUpdate(column);

    this.setState({ tempX, tempY }); // ==> {"tempX" : tempX, "tempY" : tempY}
  };

  NewTextField = (classes, index, label, array, type) => {
    return (
      <TextField
        className={classes.inputField}
        id="outlined-number"
        label={label}
        type="number"
        value={array} // this.state.tempX[index]
        onChange={event => this.handleInputChange(event, index, type)}
        margin="dense"
        variant="outlined"
      />
    );
  };

  render() {
    const { column } = this.state;
    const { classes, dataType, maxFields } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={Styles}>
          <Grid
            container
            className={classes.root}
            align="center"
            vertical-align="center"
            direction="column"
          >
            {column.map((
              value, // value is currently set to 0
              index
            ) => (
              <Grid>
                <ColorButton className={classes.buttonSquare} />
                {this.NewTextField(
                  classes,
                  index,
                  "X",
                  this.state.tempX[index],
                  "x"
                )}
                {this.NewTextField(
                  classes,
                  index,
                  "Y",
                  this.state.tempY[index],
                  "y"
                )}
                {dataType === "mark-serie" &&
                  this.NewTextField(
                    classes,
                    index,
                    "Size",
                    this.state.tempS[index],
                    "s"
                  )}
                <Button
                  className={classes.button}
                  color="primary"
                  variant="outlined"
                  onClick={() => this.addNewValue(index)}
                >
                  <Typography variant="button" gutterBottom>
                    Add
                  </Typography>
                </Button>
                {/* creates new anonymous function, for not be clicked right away when entering the page */}
                <Button
                  // className={classes.buttonSquare}
                  color="secondary"
                  onClick={() => this.deleteField(index)}
                >
                  <DeleteIcon className={classes.iconButton} />
                </Button>
              </Grid>
            ))}
            <Grid>
              <Button
                className={classes.button}
                variant="fab"
                color="secondary"
                aria-label="Add"
                disabled={column.length === maxFields}
                onClick={this.addNewField}
              >
                <AddIcon className={classes.iconButton} />
              </Button>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

//export default withRoot(withStyles(styles(InputForm)));
export default withStyles(styles)(InputForm);
