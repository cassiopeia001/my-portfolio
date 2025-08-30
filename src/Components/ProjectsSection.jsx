import { useContext } from "react"
import data from "../Data/Data.json"
import ProjectCard from "./ProjectCard"
import {motion} from 'motion/react'
import { ThemeContext } from "../Context/ThemeContext"
export default function ProjectsSection(){
    const {darkMode} = useContext(ThemeContext)
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}   
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            id="projects" className="flex flex-col gap-10 ">
            <h2 className={`font-raleway text-2xl lg:text-3xl font-extrabold 
                bg-gradient-to-r  ${darkMode? "from-blue-400 to-blue-300  ":"from-blue to-indigo-500 "}  
                bg-clip-text text-transparent relative w-fit
                `}>Projects</h2>
            <div className="w-full flex item-center justify-center">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 justify-center">
                    {
                        data.map(project=> <ProjectCard project={project} />)
                    }
                </div>    
            </div>
        </motion.section>
    )
}