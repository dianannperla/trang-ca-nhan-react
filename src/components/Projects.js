import React from 'react';

function Projects() {
  const projects = [
    { title: 'Dự án 1', description: 'Mô tả dự án 1', image: 'link_ảnh_1' },
    { title: 'Dự án 2', description: 'Mô tả dự án 2', image: 'link_ảnh_2' }
  ];

  return (
    <div className="projects">
      <h2>Dự Án</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} style={{width: '100%'}} />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
