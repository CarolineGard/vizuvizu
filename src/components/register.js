import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { registerUser } from "../actions/authentication";

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
        <h2>Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          {errors.name && <div>{errors.name}</div>}
          <br />
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
          <input
            type="password"
            placeholder="Confirm password"
            name="password_confirm"
            onChange={this.handleInputChange}
            value={this.state.password_confirm}
          />
          {errors.password_confirm && <div>{errors.password_confirm}</div>}
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

Register.PropTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
