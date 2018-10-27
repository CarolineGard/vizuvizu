import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  wrapper: {
    height: "100vh",
  },
});

class MyCharts extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="wrapper">
        <Grid
          container
          className={classes.root}
          align="center"
          vertical-align="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h4">
              Below you find your saved charts
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(MyCharts);
