import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Intro.css';

const Intro = () => {
  const [hoverUp, setHoverUp] = useState(false); // State for the fade-in effect
  const [startTyping, setStartTyping] = useState(false); // State for starting the typing animation
  const [fadeInHi, setFadeInHi] = useState(false); // State for the "Hi." fade-in effect

  // Trigger the hover-up effect (fade-in) when the component mounts
  useEffect(() => {

    setTimeout(() => {
      setHoverUp(true);
       // Start fade-in for "Mark Trinidad" after 500ms
       // Start fade-in for "Hi." after 500ms
    }, 300);

    setTimeout(() => {
      setFadeInHi(true);
       // Start fade-in for "Mark Trinidad" after 500ms
       // Start fade-in for "Hi." after 500ms
    }, 1200);

    // Start typing after 2.5 seconds, allowing the fade-in effects to complete first
    setTimeout(() => {
      setStartTyping(true); // Start typing after delay
    }, 3000);
  }, []);

  return (
    <div id='' className="intro">
      <div className={`column-left ${hoverUp ? 'fade-in' : ''}`}>
        <h1>Mark</h1>
        <h1>Trinidad</h1>
      </div>

      <div className="column-right">
        {/* Apply fade-in-left class for the "Hi." text */}
        <h1 className={`intro-hi ${fadeInHi ? 'fade-in-left' :''}`}>Hi.</h1>
        {startTyping && ( // Only show the typing animation after delay
          <div className="typing-container">
            <TypeAnimation
              sequence={[
                "I'm a software engineer from Manama, Bahrain, and I'm a fresh graduate excited about the world of technology. I have a passion for learning and love diving into new developments in the field. Whether it's picking up a new coding language, exploring the latest frameworks, or working on cool projects, I’m all about pushing my skills and knowledge further. I'm eager to contribute to innovative solutions and grow along the way!",
                1000, // Waits for 1 second after finishing
              ]}
              speed={80}
              wrapper="p"
              repeat={0} // Repeat 0 means it will only type the text once
              style={{ color: 'white', fontSize: '1.5rem', fontFamily: 'OpenSans, sans-serif', whiteSpace: 'pre-line' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
