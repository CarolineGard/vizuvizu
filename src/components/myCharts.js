import React from "react";
import { Route, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CreatePost from "../containers/CreatePost";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import MarkSerie from "../charts/MarkSerie";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  wrapper: {
    height: "90vh",
  },

  button: {
    marginTop: 30,
    justify: "center",
  },

  paper: {
    minHeight: 350,
    minWidth: 450,
    padding: 40,
  },
});

class MyCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containData: false,
    };

    this.props.getProducts();
  }

  handleDelete = id => {
    this.props.deletePost(id);
  };

  render() {
    const { classes, posts } = this.props;
    return (
      <div className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.wrapper}
            spacing={16}
            alignItems="center"
            direction="row"
            justify="center"
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{ marginTop: 90, marginBottom: 50 }}
              >
                Here you can see your saved charts
              </Typography>
            </Grid>
            <Grid container justify="center" direction="row">
              {!posts.length ? (
                <Grid item xs={12}>
                  <Typography variant="h6">
                    You have not created any charts yet
                  </Typography>
                  <Grid item xs={12}>
                    <Button
                      className={classes.button}
                      color="primary"
                      variant="extendedFab"
                    >
                      <Link
                        style={{ color: "#fff", textDecoration: "none" }}
                        to="/newtable"
                      >
                        {" "}
                        Create Chart
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  container
                  justify="center"
                  justifyItems="center"
                  direction="row"
                >
                  <Grid item>
                    <Typography variant="h6">
                      Number of charts: {posts.length}
                    </Typography>
                    <div>
                      {posts.map(object => {
                        console.log("data, my charts:", object.data);
                        console.log("data, my charts:", object.chartType);
                        return (
                          <Grid container direction="row" spacing={24}>
                            <Grid item xs={6}>
                              <Paper className={classes.paper}>
                                <Typography variant="h6">
                                  {object.name}
                                </Typography>
                                <Typography variant="h6">
                                  {object.description}
                                </Typography>
                                <Grid item xs={12}>
                                  {object.chartType === "line-chart" && (
                                    <LineChart data={object.data} />
                                  )}
                                  {object.chartType === "bar-chart" && (
                                    <BarChart data={object.data} />
                                  )}
                                  {object.chartType === "mark-serie" && (
                                    <MarkSerie data={object.data} />
                                  )}
                                </Grid>
                                <Button
                                  className={classes.button}
                                  color="primary"
                                  variant="extendedFab"
                                  onClick={() => this.handleDelete(object._id)}
                                >
                                  Delete
                                </Button>
                              </Paper>
                            </Grid>
                          </Grid>
                        );
                      })}
                    </div>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Route path="/newtable" component={CreatePost} />
      </div>
    );
  }
}

export default withStyles(styles)(MyCharts);
