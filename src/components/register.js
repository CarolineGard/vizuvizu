import React from "react";

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
    console.log(user);
  }

  render() {
    return (
      <div>
        <h2>Registration</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            name="password_confirm"
            onChange={this.handleInputChange}
            value={this.state.password_confirm}
          />
          <br />
          <button type="submit">Register User</button>
        </form>
      </div>
    );
  }
}

export default Register;
