import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoAccessibility } from "react-icons/io5";
import { SiTailwindcss, SiReactrouter, SiSass, SiPostgresql, SiExpress, SiVite } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import SkillCard from "./SkillCard";
import {motion} from 'motion/react'
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function SkillsSection(){

    const{darkMode}= useContext(ThemeContext)

    const skills= [
        {icon: FaHtml5, label: "HTML5"},
        {icon: FaCss3Alt, label: "CSS3"},
        {icon: IoLogoJavascript, label: "Javascript"},
        {icon: FaReact, label: "React"},
        {icon: SiTailwindcss, label: "Tailwind"},
        {icon: SiReactrouter, label: "React Router"},
        {icon: SiSass, label: "Sass"},
        {icon: FaNodeJs, label: "Node.js" },
        {icon : SiExpress, label : "Express.js"},
        {icon: SiPostgresql, label: "PostgreSQL"},
        {icon: IoAccessibility, label: "Accessibility"},
        {icon: FaGitAlt, label: "Git"},
        {icon: SiVite, label: "Vite"},
        {icon: TbBrandFramerMotion, label: "Motion"}
    ]
    return(
        <motion.section id="skills" 
            initial={{ opacity: 0, y: 50 }}   
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}  className="flex flex-col gap-10 w-full">
            <h2 className={`font-raleway text-2xl lg:text-3xl font-extrabold 
                bg-gradient-to-r  ${darkMode? "from-blue-400 to-blue-300  ":"from-blue to-indigo-500 "}  
                bg-clip-text text-transparent relative w-fit
                `}>Skills</h2>
            
            <div className="w-full flex justify-center items-center">
                <ul className="max-w-xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 place-items-center gap-6 ">
                    {
                        skills.map(skill=> <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />)
                    }
                </ul>    
            </div>
        </motion.section>
    )
}