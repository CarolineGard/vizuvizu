import React from "react";

//Material-ui
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputForm from "./inputForm";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import MarkSerie from "../charts/MarkSerie";

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
      save: false,
      tableChoice: 1,
      data: [],
      name: "",
      description: "",
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

  saveTable = state => {
    const { data } = this.state;
    data != null && data.length > 0
      ? this.setState(state => ({ save: true }))
      : console.log("error, data is required to save table!"); // FIX
  };

  goBack = state => {
    this.setState(state => ({ save: false }));
  };

  handleChange = (event, name) => {
    //const { name } = this.state;
    this.setState({
      [name]: event.target.value,
    });
  };

  onUpdate = values => {
    this.setState({ data: values.slice(0) });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.name.trim() &&
      this.state.description.trim() &&
      this.state.tableChoice.trim()
    ) {
      this.props.onAddPost(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      name: "",
      description: "",
      data: [],
      save: false,
      showChoice: false,
      showInputForm: false,
    });
  };

  render() {
    const { showChoice, showInputForm, save, name, description } = this.state;

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
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: "70%" }}
                >
                  {!showChoice &&
                    !showInputForm && (
                      <Grid
                        container
                        className="button"
                        direction="row"
                        spacing={0}
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
                    !showInputForm &&
                    !save && (
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
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paperchart}>
                <Typography variant="h4" className={classes.text} gutterBottom>
                  Chart view
                </Typography>
                {console.log("dataNewTAble: ", this.state.data[0])}
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: "70%" }}
                >
                  {!save ? (
                    this.state.data === undefined ||
                    this.state.data.length === 0 ? (
                      <Typography
                        variant="h6"
                        className={classes.text}
                        gutterBottom
                      >
                        Nothing here yet
                      </Typography>
                    ) : (
                      <Grid xs={12} justify="center">
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
                          onClick={() => this.saveTable()}
                        >
                          <Typography variant="button" gutterBottom>
                            Save table
                          </Typography>
                        </Button>
                      </Grid>
                    )
                  ) : (
                    <Grid
                      container
                      spacing={16}
                      direction="column"
                      justify="center"
                      justifyItems="center"
                      style={{ width: "45vh", height: "50vh" }}
                    >
                      <Grid item>
                        <Typography variant="button" gutterBottom>
                          Name your chart:
                        </Typography>
                      </Grid>
                      <form
                        className={classes.container}
                        noValidate
                        autoComplete="off"
                        onSubmit={this.handleSubmit}
                      >
                        <Grid
                          container
                          spacing={16}
                          direction="column"
                          justify="center"
                          justifyItems="center"
                        >
                          <Grid item>
                            <TextField
                              id="standard-name"
                              label="Name"
                              //className={classes.textField}
                              value={name}
                              onChange={event =>
                                this.handleChange(event, "name")
                              }
                              margin="normal"
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item>
                            <TextField
                              id="outlined-multiline-flexible"
                              label="Description"
                              multiline
                              rowsMax="8"
                              value={description}
                              onChange={event =>
                                this.handleChange(event, "description")
                              }
                              className={classes.textField}
                              margin="normal"
                              helperText="Specify your chart"
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item>
                            <Button
                              className={classes.button}
                              color="secondary"
                              variant="extendedFab"
                              style={{ width: 300 }}
                              type="submit"
                              onClick={() => this.saveTable()}
                            >
                              <Typography variant="button" gutterBottom>
                                Save
                              </Typography>
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              className={classes.button}
                              color="primary"
                              variant="extendedFab"
                              style={{ width: 300 }}
                              value="Add Node server"
                              onClick={() => this.goBack()}
                            >
                              <Typography variant="button" gutterBottom>
                                Go back
                              </Typography>
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </Grid>
                  )}
                </Grid>
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
