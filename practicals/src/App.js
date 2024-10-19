import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './login';

function App() {
  return (
    <div className="App">
      
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='*' element={<h1>404 error page not found</h1>}></Route>
          </Routes>
        </Router>
      </div>
      
      <hr/>
      <div>{<Login></Login>}</div>
    </div>
  );
}


export default App;