import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { registerUser } from "../actions/authentication";
import Styles from "../styles/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm,
    };
    this.props.registerUser(user, this.props.history);
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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { errors } = this.state;
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
                <Typography variant="h5"> Register </Typography>
              </Grid>
              <form onSubmit={this.handleSubmit}>
                <Grid item xs={12}>
                  <TextField
                    // className={classes.inputField}
                    label="Name"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    margin="dense"
                    variant="outlined"
                    spacing="200"
                    style={{ marginTop: 20, width: 280 }}
                  />
                  {errors.name && <div>{errors.name}</div>}
                </Grid>
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
                  <TextField
                    label="Confirm password"
                    type="password"
                    name="password_confirm"
                    value={this.state.password_confirm}
                    onChange={this.handleInputChange}
                    margin="dense"
                    variant="outlined"
                    spacing="200"
                    style={{ marginTop: 20, width: 280 }}
                  />
                  {errors.password_confirm && (
                    <div>{errors.password_confirm}</div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    style={{ marginTop: 20, width: 280, height: 45 }}
                  >
                    Register
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
