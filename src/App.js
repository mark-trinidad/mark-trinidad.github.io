import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        
      </main>
    </div>
  );
}

export default App;
