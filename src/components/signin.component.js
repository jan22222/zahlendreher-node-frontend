import React from "react";
import axios from "axios";

// Write down a simple html page that contains a form and
// form should have 2 text fields to accept
// user name and password and a submit button
// and password should be 8 character atleast

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",

      usernameError: "",
      passwordError: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      //[e.target.name]  computed property names es6 new feature
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let usernameError = this.state.usernameError;
    let passwordError = this.state.passwordError;

    if (!this.state.username) {
      usernameError = "Username can not be blank";
    } else {
      usernameError = "";
    }

    if (!this.state.password) {
      passwordError = "Password can not be blank";
    } else if (this.state.password.length < 8) {
      passwordError = "password must be at least 8 characters";
    } else {
      passwordError = "";
    }

    this.setState({
      usernameError: usernameError,
      passwordError: passwordError
    });

    if (usernameError || passwordError ) {
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault(); // avoid page refresh
    let isValid = this.validate();
    //console.log(isValid);

    if (isValid) {
      //console.log(this.state)
      axios
        .post("https://zahlendreher-node-backend-r9tg.onrender.com/signin", this.state)
        .then(response => {
          console.log(response);
          alert("submitted");
        })
        .catch(error => {
          console.log(error);
        });

      this.setState({
        username: "",
        password: "",
        usernameError: "",
        passwordError: "",
        
      });
    }
  };

  render() {
    return (
      <>
        {/* when form is submitted, handleSubmit will be executed */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleOnChange}
            />
            <div>{this.state.usernameError}</div>
          </div>

          <div>
            <input
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
            <div>{this.state.passwordError}</div>
          </div>

          <button type="submit">Login</button>
          {/* <input type = "submit"/> */}
        </form>
      </>
    );
  }
}
  export default Login;