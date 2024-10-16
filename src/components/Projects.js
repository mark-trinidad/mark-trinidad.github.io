import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="title-projects">
        <h1>PROJECTS</h1>
      </div>

      <div className="flex-container">
        <div className="item-container">
          <div className="item">Attendance Management System</div>
          <div className="line"></div>
        </div>
        <div className="item-container">
          <div className="item">Tournament Finder</div>
          <div className="line"></div>
        </div>
        <div className="item-container">
          <div className="item">More projects</div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
