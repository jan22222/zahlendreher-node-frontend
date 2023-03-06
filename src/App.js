import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Link,
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Tasks from "./components/tasks.component"
import Profile from "./components/profile.component"
import SignUp from "./components/signUp.component.js"
import SignIn from "./components/signin.component.js"
import EditorList from "./components/select_editor.component.js"
import UserList from "./components/users.component"

function App() {
  return (
    <div className="App">
     
    <h2>Welcome to React Router Tutorial</h2>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
      <li><Link to={'/'} className="nav-link"> Home </Link></li>
      <li><Link to={'/profile'} className="nav-link"> Profile </Link></li>
      <li><Link to={'/editorlist'} className="nav-link"> List of editors </Link></li>
      <li><Link to={'/userlist'} className="nav-link">UserList</Link></li>
      <li><Link to={'/signup'} className="nav-link">SignUp</Link></li>
      <li><Link to={'/signin'} className="nav-link">SignIn</Link></li>
    </ul>
    </nav>
    <hr />
       
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path='/signup' element={<SignUp />}  />
            <Route path='/signin' element={<SignIn />}  />
            <Route path='/editorlist' element={<EditorList />}  />
            <Route path='/userlist' element={<UserList />}  />


          </Routes>
       
        
    </div>
   
  )
}

export default App
