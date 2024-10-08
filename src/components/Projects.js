import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'A cool project I worked on.', link: 'https://github.com/mark-trinidad/project1' },
    { title: 'Project 2', description: 'Another awesome project.', link: 'https://github.com/mark-trinidad/project2' },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
