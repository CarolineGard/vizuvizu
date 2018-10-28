import React from "react";
import { Route, Link } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import styles from "../styles/styles";
import CreatePost from "../containers/CreatePost";

// destructar header från props: props.header
// Reusable components
const Header = ({ title }) => <Typography variant="h1"> {title} </Typography>;
const Content = ({ text }) => <Typography variant="body1"> {text} </Typography>;

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.wrapper}
            spacing={16}
            alignItems="center"
            direction="column"
            justify="center"
          >
            <Grid item>
              <Header title="vizuvizu" />
            </Grid>
            <Grid item>
              <Content text="The great way to visualize your  complex data  " />
            </Grid>
            <Grid item>
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
                  Create your first chart
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Route path="/newtable" component={CreatePost} />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
