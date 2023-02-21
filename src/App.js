import './App.css';


import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.component"
import Rehash from "./components/Rehash.component"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/rehash" element={ <Rehash/> } />
      </Routes>
    </div>
  )
}

export default App
