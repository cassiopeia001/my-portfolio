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

    <div className={` ${darkMode ? "bg-very-dark-blue text-beige": "bg-cream text-very-dark-blue"} min-h-screen w-full transition-colors duration-200 ease-out`}>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <NavBar />
        <main className='px-5 py-3 mt-16 flex flex-col gap-16 lg:px-16'>
          <div className='flex justify-between gap-3'>
            <div className='flex flex-col gap-10 xl:w-2/3'>

            <HeroSection />
            <AboutSection />
            </div>
            <img className='max-w-full xl:w-1/3 mt-8 h-auto object-contain  hidden xl:block' src="/my-portfolio/assets/images/coding-8.svg" alt="" />
          </div>
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
