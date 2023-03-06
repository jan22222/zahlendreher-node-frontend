import React from "react";
import axios from "axios";

export default class EditorList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://zahlendreher-node-backend-r9tg.onrender.com/coworkers/all`,
    {
        headers: {'Content-Type': 'application/json'}
    })  
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
    .catch(function(error) {
        console.log(error.response.data);
    });
  }

  render() {
    return (
      <select>
        {this.state.persons.map(person => <option>{person.name}</option>)}
      </select>
    );
  }
}

