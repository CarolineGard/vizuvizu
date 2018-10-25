import React from "react";

//Material-ui
import { MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputForm from "./inputForm";
import Styles from "../styles/mui-styles";
import PropTypes from "prop-types";

import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import MarkSerie from "../charts/MarkSerie";
import { runInThisContext } from "vm";

//import Btn from "button.js";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  wrapper: {
    height: "80vh",
  },

  paper: {
    minHeight: 140,
    minWidth: 500,
    textAlign: "center",
    padding: theme.spacing.unit * 2,
  },

  paperchart: {
    padding: theme.spacing.unit * 2,

    marginTop: "9rem",
    width: "80vh",
    height: "70vh",
  },

  text: {
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: 170,
  },

  control: {
    padding: theme.spacing.unit * 2,
  },

  button: {
    padding: theme.spacing.unit * 2,
    width: "10rem",
    height: "49px",
  },
});

class NewTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChoice: false,
      showInputForm: false,
      tableChoice: 1,
      data: [],
    };
  }

  clickStart = state => {
    this.setState(state => ({
      showChoice: true,
    }));
  };

  clickChoise = (state, tableIndex, max) => {
    var table;
    tableIndex === 0 && (table = "line-chart");
    tableIndex === 1 && (table = "bar-chart");
    tableIndex === 2 && (table = "mark-serie");

    this.setState(state => ({
      showInputForm: true,
      showChoice: false,
      tableChoice: table,
      maxFields: max,
    }));
  };

  onUpdate = values => {
    this.setState({ data: values.slice(0) });
    console.log("DATA: ", this.state.data);
  };

  render() {
    const { showChoice, showInputForm } = this.state;

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.wrapper}
            spacing={8}
            alignItems="center"
            direction="row"
            justify="space-evenly"
          >
            <Grid item>
              <Paper className={classes.paperchart}>
                <Typography variant="h4" className={classes.text} gutterBottom>
                  Create a chart
                </Typography>

                {!showChoice &&
                  !showInputForm && (
                    <Grid
                      container
                      className="button"
                      direction="row"
                      spacing={8}
                      alignItems="center"
                      justify="space-evenly"
                    >
                      <Button
                        className={classes.button}
                        color="primary"
                        variant="extendedFab"
                        onClick={() => this.clickStart(this.state)}
                      >
                        Start
                      </Button>
                    </Grid>
                  )}

                {showChoice &&
                  !showInputForm && (
                    <Grid
                      container
                      className="button"
                      direction="row"
                      spacing={8}
                      alignItems="center"
                      justify="space-evenly"
                    >
                      {[0, 1, 2].map(value => (
                        <Grid key={value} item>
                          <Button
                            color="primary"
                            variant="extendedFab"
                            onClick={() =>
                              this.clickChoise(this.state, value, 1)
                            }
                          >
                            {value === 0 && "Line Chart"}
                            {value === 1 && "Bar Chart"}
                            {value === 2 && "Mark Series"}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                {this.state.showInputForm && (
                  <InputForm
                    onUpdate={this.onUpdate}
                    dataType={this.state.tableChoice}
                    maxFields={this.state.maxFields}
                  />
                )}
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paperchart}>
                <Typography variant="h4" className={classes.text} gutterBottom>
                  Chart view
                </Typography>
                {this.state.data === undefined ||
                this.state.data.length === 0 ? (
                  <Typography
                    variant="h6"
                    className={classes.text}
                    gutterBottom
                  >
                    Nothing here yet
                  </Typography>
                ) : (
                  <Grid xs={12}>
                    {this.state.tableChoice === "line-chart" && (
                      <LineChart data={this.state.data[0]} />
                    )}
                    {this.state.tableChoice === "bar-chart" && (
                      <BarChart data={this.state.data[0]} />
                    )}
                    {this.state.tableChoice === "mark-serie" && (
                      <MarkSerie data={this.state.data[0]} />
                    )}

                    <Button
                      className={classes.button}
                      color="secondary"
                      variant="extendedFab"
                      style={{ width: 300 }}
                      type="submit"
                      value="Add Node server"
                      // onClick={() => this.saveTable()}
                    >
                      <Typography variant="button" gutterBottom>
                        Save table
                      </Typography>
                    </Button>
                  </Grid>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

NewTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewTable);
