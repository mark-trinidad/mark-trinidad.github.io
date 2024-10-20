import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Intro.css';

const Intro = () => {
  const [animationState, setAnimationState] = useState({
    hoverUp: false,
    startTyping: false,
    fadeInHi: false,
    fadeInSubText: false,
  });

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationState((prev) => ({ ...prev, hoverUp: true })), 300),
      setTimeout(() => setAnimationState((prev) => ({ ...prev, fadeInSubText: true })), 700),
      setTimeout(() => setAnimationState((prev) => ({ ...prev, fadeInHi: true })), 2000),
      setTimeout(() => setAnimationState((prev) => ({ ...prev, startTyping: true })), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div id="intro" className="intro">
      <div className={`column-left ${animationState.hoverUp ? 'fade-in' : ''}`}>
        <h1>Mark <br /> Trinidad</h1>
        <h2 className={`column-left-h2 ${animationState.fadeInSubText ? 'fade-in-sub' : ''}`}>
          Software Engineer
        </h2>
        
      </div>
      <div className="column-right">
        <h1 className={`intro-hi ${animationState.fadeInHi ? 'fade-in-left' : ''}`}>Hi.</h1>
        {animationState.startTyping && (
          <div className="typing-container">
            <TypeAnimation
              sequence={[
                "I'm a software engineer based in Manama, Bahrain, and a fresh graduate excited about exploring the world of technology. I have a passion for learning and love diving into new developments in the field. Whether it's picking up a new coding language, exploring the latest frameworks, or working on cool projects, I’m all about pushing my skills and knowledge further. I'm eager to contribute to innovative solutions and grow along the way!",
                1000,
              ]}
              speed={85}
              wrapper="p"
              repeat={0}
              style={{
                color: 'white',
                fontFamily: 'OpenSans, sans-serif',
                whiteSpace: 'pre-line',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
