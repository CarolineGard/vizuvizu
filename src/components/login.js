import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LoginUser } from "../actions/authentication";

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
    console.log(user);
    this.props.LoginUser(user);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h2>Log in</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          {errors.email && <div>{errors.email}</div>}
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          {errors.password && <div>{errors.password}</div>}
          <br />
          <button type="submit">Login User</button>
        </form>
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
  { LoginUser }
)(Login);
