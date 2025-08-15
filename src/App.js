import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="App">
      <Profile />
      <Skills />
      <Projects />
      <SocialLinks />
    </div>
  );
}

export default App;
