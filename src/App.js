import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import './App.css';

const Intro = lazy(() => import('./components/Intro'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Credits = lazy(() => import('./components/Credits'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Suspense fallback={<div>Loading...</div>}>
          <Intro />
          <About />
          <Projects />
          <Credits />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
