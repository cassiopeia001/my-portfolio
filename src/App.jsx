import './App.css';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import SkillsSection from './Components/SkillsSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from './Components/ContactSection';
import { useState, useEffect } from 'react';
import { ThemeContext } from './Context/ThemeContext';


function App() {

  const [darkMode, setDarkMode] = useState(() => {
  const stored = localStorage.getItem("theme"); 

  if (stored) {
    
    return stored === "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (

    <div className={` ${darkMode
      ? "bg-[#2D3B4D] bg-gradient-to-l from-[#2D3B4D] to-[#1F2937] text-[#FAF7F2]"
      : "bg-[#FAF7F2] bg-gradient-to-br from-[#FAF7F2] to-[#F5EFE6] text-[#1F2937]"} min-h-[100dvh] w-full transition-colors duration-200 ease-out`}>
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
