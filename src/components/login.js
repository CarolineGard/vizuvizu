import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authentication";
import Styles from "../styles/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(user);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div className="root">
        <Grid item xs={12}>
          <Grid
            container
            style={{ height: "100vh" }}
            spacing={16}
            alignItems="center"
            direction="column"
            justify="center"
          >
            <Paper style={{ padding: 30 }}>
              <Grid item xs={12}>
                <Typography variant="h5"> Login </Typography>
              </Grid>
              <form onSubmit={this.handleSubmit}>
                <Grid item xs={12}>
                  <TextField
                    // className={classes.inputField}
                    label="Email"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    margin="dense"
                    variant="outlined"
                    spacing="200"
                    style={{ marginTop: 20, width: 280 }}
                  />
                  {errors.email && <div>{errors.email}</div>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    margin="dense"
                    variant="outlined"
                    spacing="200"
                    style={{ marginTop: 20, width: 280 }}
                  />
                  {errors.password && <div>{errors.password}</div>}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    style={{ marginTop: 20, width: 280, height: 45 }}
                  >
                    Login User
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
