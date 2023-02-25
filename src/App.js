import './App.css';

import {
  Link,
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from "./components/Home.component"
import Rehash from "./components/Rehash.component"
import SignUp from "./components/signUp.component.js"
import SignIn from "./components/signin.component.js"

function App() {
  return (
    <div className="App">
     
    <h2>Welcome to React Router Tutorial</h2>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
      <li><Link to={'/'} className="nav-link"> Home </Link></li>
      <li><Link to={'/signup'} className="nav-link">SignUp</Link></li>
      <li><Link to={'/signin'} className="nav-link">SignIn</Link></li>
    </ul>
    </nav>
    <hr />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signup' element={<SignUp />}  />
            <Route path='/signin' element={<SignIn />}  />
          </Routes>
       
        
    </div>
   
  )
}

export default App
