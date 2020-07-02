import React from 'react';
import './App.scss';
import HomeSection from './pages/homeSection/homeSection'
import Header from './components/header/header'
import BackgroundSection from './pages/backgroundSection/backgroundSection.js'
import EducationSection from './pages/educationSection/educationSection';
import SkillSection from './pages/skillSection/skillSection';
import ProjectSection from './pages/projectSection/projectSection';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeSection/>
      <BackgroundSection/>
      <EducationSection/>
      <SkillSection/>
      <ProjectSection/>
      <Footer/>
    </div>
  );
}

export default App;
