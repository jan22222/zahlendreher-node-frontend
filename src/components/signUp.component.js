import React from "react";
import axios from "axios";

// Write down a simple html page that contains a form and
// form should have 2 text fields to accept
// user name and password and a submit button
// and password should be 8 character atleast

class Register extends React.Component {
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
    let emailError = this.state.emailError;
    let roleError = this.state.roleError;
    if (!this.state.username) {
      usernameError = "Username can not be blank";
    } else {
        usernameError = "";
    }

    if (!this.state.password) {
      passwordError = "Password can not be blank";
    } else if (this.state.password.length < 8) {
      passwordError = "Password must be at least 8 characters";
    } else {
      passwordError = "";
    }

    this.setState({
      usernameError: usernameError,
      passwordError: passwordError,
      roleError: roleError,
      passwordError: passwordError
    });

    if (usernameError || passwordError || emailError || roleError) {
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault(); // avoid page refresh
    let isValid = this.validate();
    //console.log(isValid);

    if (isValid) {
      console.log(this.state)
      axios.post("https://zahlendreher-node-backend-r9tg.onrender.com/signup", 
      {"username": this.state.username, "email": this.state.email, "role": this.state.role, "password" : this.state.password }, 
        {
        headers: {'Content-Type': 'application/json'}
      }).then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log(error.response.data);
      })      

      this.setState({
        username: "",
        password: "",
        email: "",
        role: "",
        usernameError: "",
        passwordError: "",
        emailError: "",
        roleError: ""
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
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
            <div>{this.state.emailError}</div>
          </div>

          <div>
            <input
              name="role"
              placeholder="role"
              value={this.state.role}
              onChange={this.handleOnChange}
            />
            <div>{this.state.roleError}</div>
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

          <button type="submit">submit</button>
          {/* <input type = "submit"/> */}
        </form>
      </>
    );
  }
}
  export default Register;