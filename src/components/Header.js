import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Mark Trinidad</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
