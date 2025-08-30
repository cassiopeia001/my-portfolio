import { useContext, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { ThemeContext } from "../Context/ThemeContext";
import { motion, AnimatePresence, easeInOut } from "motion/react"
export default function NavBar(){

    const {darkMode, setDarkMode}= useContext(ThemeContext);
    const [menuOpen, setMenuOpen]= useState(false)
    return (
        <header className={`w-full px-5 py-3 shadow-md md:px-7 lg:px-16 xl:px-24 ${darkMode ? "bg-dark-blue": "bg-beige"}`} >
            <nav className="flex justify-between items-center text-lg ">
                {
                    darkMode ? (<img src="/my-portfolio/assets/images/monogram-light.png" className="w-16" alt="logo" />) : (<img src="/my-portfolio/assets/images/monogram-dark.png" className="w-16" alt="logo" />)
                }
                
                <button className="cursor-pointer hover:text-light-orange transition-colors duration-200 ease-out lg:hidden"
                    onClick={()=> setMenuOpen(prev=> !prev)}
                    aria-label="Click to open menu">
                        <LuMenu  size={30} />
                </button>
                <ul className="hidden lg:flex font-raleway font-semibold gap-20">
                    <li><a className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full" href="#about">About</a></li>
                    <li><a className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full" href="#projects">Projects</a></li>
                    <li><a className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full" href="#contact">Contact</a></li>
                </ul>
                <AnimatePresence>
                    {
                        menuOpen &&
                        <motion.div
                        initial={{ x: "100%" }}   
                        animate={{ x: 0 }}         
                        exit={{ x: "100%" }}  
                        transition={{ type: "tween", duration: 0.3 }}
                        className={`${darkMode? " bg-dark-blue/90 backdrop-blur-sm":"bg-white/80 backdrop-blur-md" } shadow-lg fixed z-30 top-0 right-0 h-full w-1/2 p-8 flex flex-col gap-20`}>
                        <button className="cursor-pointer  hover:text-light-orange transition-colors duration-200 ease-out"
                            onClick={()=> setMenuOpen(prev=> !prev)}
                            aria-label="Click to close menu">
                            <IoClose className={`${menuOpen? "":"hidden"}`}  size={30}/>
                                
                            </button> 
                            <ul className="flex flex-col gap-6 font-semibold font-raleway">
                                <li><a className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full" href="#about">About</a></li>
                                <li><a className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full" href="#projects">Projects</a></li>
                                <li><a className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full" href="#contact">Contact</a></li>
                            </ul>
                            <button className="cursor-pointer hover:text-light-orange transition-colors duration-200 ease-out" 
                                onClick={()=>setDarkMode(prev=> !prev)}
                                aria-label="Toggle to switch theme">
                                { 
                                    darkMode? <FiSun size={30} />
                                    :  <FiMoon size={30} />
                                }
                            </button>
                        </motion.div>
                    }
                </AnimatePresence>
                <button className="cursor-pointer hover:text-light-orange transition-colors duration-200 ease-out hidden lg:block" 
                    onClick={()=>setDarkMode(prev=> !prev)}
                    aria-label="Toggle to switch theme">
                    { 
                        darkMode? <FiSun size={30} />
                        :  <FiMoon size={30} />
                    }
                </button>
                
            </nav>
        </header>
    )
}