import React from "react";

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
  }

  render() {
    return (
      <div>
        <h2>Log in</h2>
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
        <button type="submit">Login User</button>
      </div>
    );
  }
}

export default Login;
