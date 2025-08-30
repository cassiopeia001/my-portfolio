import './App.css';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import SkillsSection from './Components/SkillsSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from './Components/ContactSection';
import { useState } from 'react';
import { ThemeContext } from './Context/ThemeContext';


function App() {

  const [darkMode, setDarkMode]= useState(false);

  return (

    <div className={` ${darkMode ? "bg-gradient-to-l from-dark-blue to-very-dark-blue text-cream": "bg-gradient-to-br from-cream to-beige text-very-dark-blue"} min-h-screen w-full transition-colors duration-200 ease-out`}>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <NavBar />
        <main className='px-5 py-3 flex flex-col gap-16 lg:px-16 xl:px-24 h-full'>  

          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
