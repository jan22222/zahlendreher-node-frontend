import React from "react";

import userService from "../services/user.service";

export default class UserList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    userService.getAllUsers() 
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
      console.log(res)
    })
    .catch(function(error) {
        console.log(error.response.data);
    });
  }

  render() {
    return (
      <select>
        {this.state.persons.map(person => <option>{person.username}</option>)}
      </select>
    );
  }
}

