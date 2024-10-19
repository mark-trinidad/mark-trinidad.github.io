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
          <div className="item">Tournament Finder</div>
          <p className='p-projects'>I created a automated script for joining all tournaments in repeat.gg using pyautogui and tkinter(GUI)<br/>
          </p>
          <div className='icons-container'>
            <GitHubIcon
              className="MuiSvgIcon-root-pr"
              onClick={() => window.open('https://github.com/mark-trinidad/Tournament-Finder', '_blank')}
            />
          </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

export default Projects;
