import React from 'react';
import FadeUp from './FadeUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="title-projects">
        <FadeUp>
          <h1>PROJECTS</h1>
        </FadeUp>  
      </div>
      
      <div className="flex-container">
        <div className="item-container">
          <FadeUp delay="0.2s">
            <div className="line"></div>
            <div className="item">Deep Reinforcement Learning to Walk</div>
            <p className='p-projects'>An application created for <b>University of Bolton Project, </b> 
            this lets you train an AI bot that gets smarter over time using reinforcement learning.
            </p>
            <div className='icons-container'>
              <GitHubIcon
                className="MuiSvgIcon-root-pr"
                onClick={() => window.open('https://github.com/mark-trinidad/Deep-Reinforcement-Learning-to-Walk', '_blank')}
              />
              <LaunchIcon
                className="MuiSvgIcon-root-pr"
                onClick={() => window.open('https://marktrinidad.itch.io/deep-reinforcement-learning-to-walk', '_blank')}
              />
            </div>
          </FadeUp>
        </div>
        
        <div className="item-container">
          <FadeUp delay="0.5s">
          <div className="line"></div>
          <div className="item">Attendance Management System</div>
          <p className='p-projects'>An <b> Agile Project </b> made for University of Bolton.<br/>
          Our group developed an Attendance Management System to automate attendance tracking for organizations. This involved detailed planning and agile methodologies.
          </p>
          <div className='icons-container'>
            <GitHubIcon
              className="MuiSvgIcon-root-pr"
              onClick={() => window.open('https://github.com/mark-trinidad/Attendance-Management-System', '_blank')}
            />
          </div>
          </FadeUp>
        </div>
        <div className="item-container">
         <FadeUp delay="0.8s">
          <div className="line"></div>
          <div className="item">React Practice Website</div>
          <p className='p-projects'>A personal collection of React projects created for practice, showcasing various features and concepts such as state management, component architecture, routing, and API integration, all built to improve skills and explore React's capabilities.<br/>
          </p>
          <div className='icons-container'>
            <GitHubIcon
              className="MuiSvgIcon-root-pr"
              onClick={() => window.open('https://github.com/mark-trinidad/React_Practice', '_blank')}
            />
            <LaunchIcon
                className="MuiSvgIcon-root-pr"
                onClick={() => window.open('https://mark-trinidad.github.io/React_Practice', '_blank')}
              />
          </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

export default Projects;
