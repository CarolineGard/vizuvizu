import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Route, Switch } from "react-router-dom";

import "../styles/App.css";

/*
class Profile extends Component {
  render() {
    return <p>Profile</p>;
  }
}

class Login extends Component {
  render() {
    return <p>Login to your profile</p>;
  }
}*/

///////////////////////////////////////////////
/*
class Header extends Component {
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  </header>
};
*/
/*
const Login = () => (
       <p>Login</p>
)
  
const Profile = () => (
      return <p>Profile</p>
)
  


const routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={Profile} />
    </Swith>
);
*/

class Navbar extends Component {
  render() {
    return (
      <div>
        <h3>Profile</h3>
        <h3>New Table</h3>
        <h3>My Tables</h3>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return <h1> {this.props.header} </h1>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header header="Login" />
      </div>
    );
  }
}

export default App;
//<Header />
//<Main />
