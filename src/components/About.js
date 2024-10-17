import React from 'react';
import FadeUp from './FadeUp';
import '../styles/About.css';


const About = () => {

  return (
    <div id='about' className='about'>
      
      <div className="column-right-abt">
        <FadeUp delay="0.3s">
          <h1>ABOUT</h1>
          <p>
          Hello! I'm Mark from Philippines, and I grew up on the humble island of Bahrain. From a young age, I’ve been 
          fascinated by how computers work. I remember experimenting with VMware and Linux to explore 
          ethical hacking, which sparked my passion for technology and led me to pursue software engineering.
          </p>
        </FadeUp>

        <FadeUp delay="0.6s">
          <p>Here are some of the technologies I've been working with:</p>
          
          <ul className='skills-list'>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>C#</li>
            <li>Python</li>
            <li>SQL</li>
            <li>HTML/CSS</li>
          </ul>
        </FadeUp>
        <FadeUp delay="0.75s">
          <p>Beyond my work in software development, I'm deeply interested in advancements in Artificial Intelligence. 
            In my free time, I enjoy playing games with friends and staying up-to-date with tech innovations.
          </p>
        </FadeUp>
      </div>
    
      <div className="column-left-abt">
        <FadeUp delay="0.3s">
        <img src='/assets/me2.jpeg' alt='mark' width={500}></img>
        </FadeUp>
      </div>  
        
    </div>
  );
}

export default About;
