import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about">
      <div className="intro">
        <div className="column-left">
          <h1>about</h1>
            <p>I'm a software engineer from Manama, Bahrain, and I'm a fresh graduate excited about the world of technology. 
              I have a passion for learning and love diving into new developments in the field. Whether it's picking up a 
              new coding language, exploring the latest frameworks, or working on cool projects, I’m all about pushing my 
              skills and knowledge further. I'm eager to contribute to innovative solutions and grow along the way! </p>
        </div>

        <div class="column-right">
        <img src='/assets/me2.jpeg' alt='mark' width={500}></img>
        </div>  
    </div>




      
      
    </section>
  );
}

export default About;
