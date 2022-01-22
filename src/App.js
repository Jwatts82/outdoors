import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/* <h1>OUTDOORS APP</h1> */}
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          {/* <Route exact path='/parks' componeent={Parks}/> */}
          {/* <Route path ='parks/:id' component={ParksState}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
