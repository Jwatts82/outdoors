import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Welcome from '../components/Home/Welcome';
import '../App.css';

function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
    </div>
  );
}

export default Home;
