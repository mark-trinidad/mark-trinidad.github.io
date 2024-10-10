import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className='content'> 
          <Intro/>
          <About/>
          <Projects/>
        </div>
    </div>
  );
}

export default App;
