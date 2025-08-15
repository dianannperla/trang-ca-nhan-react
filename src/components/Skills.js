import React from 'react';

function Skills() {
  const skills = ['React', 'JavaScript', 'CSS', 'HTML'];

  return (
    <div className="skills">
      <h2>Kỹ Năng</h2>
      <ul>
        {skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </div>
  );
}

export default Skills;
