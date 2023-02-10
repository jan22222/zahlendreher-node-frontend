import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect} from 'react'
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
async function fetchData() {
 const xy = await fetch('https://zahlendreher-node-backend-r9tg.onrender.com/')
 .then(response => response.json())
 .then(json => console.log(json))
}
function App() {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetchData() 
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
