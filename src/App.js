import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Parks from './components/Parks/Parks';
// import Trails from './components/Trails/Trails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        {/* <h1>OUTDOORS APP</h1> */}
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route exact path='/parks' element={<Parks/>}/>
          {/* <Route path ='parks/:id' element={<Trails/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
