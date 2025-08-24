import data from "../Data/Data.json"
import ProjectCard from "./ProjectCard"
import {motion} from 'motion/react'
export default function ProjectsSection(){
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}   
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            id="projects" className="flex flex-col gap-10 ">
            <h2 className="font-raleway text-xl lg:text-2xl font-bold relative w-fit
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-full after:h-[4px] after:bg-light-orange
                after:shadow-[0_3px_4px_rgba(0,0,0,0.25)]">PROJECTS</h2>
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