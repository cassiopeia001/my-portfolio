import DifficultyBadge from "./DifficultyBadge";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import {motion } from 'motion/react'


export default function ProjectCard ({project}){

    const {darkMode}= useContext(ThemeContext)
    return(
        <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`border-[1px]  ${darkMode ? "bg-dark-blue border-gray-700": "bg-beige border-[#CFC7B8]"} rounded-xl font-nunito shadow-lg flex flex-col gap-4 p-4 max-w-sm `}>
            
            <img className={`rounded-xl border-1 ${darkMode ? "border-gray-700":"border-[#CFC7B8]"}`} src={project.screenshot} alt="Screenshot of Portfolio Website project" />
            
            <h3 className={` font-raleway text-lg lg:text-2xl font-extrabold ${darkMode? "text-light-blue": "text-blue"}`}>{project.title}</h3>
            <p>{project.description}</p>
            <section className="flex flex-col gap-3 mt-auto">
                <hr className="border-t border-dark-secondary-text" />
                <div className="flex justify-between">
                    <a className="flex items-center gap-2 bg-blue transition duration-200 hover:-translate-y-1 hover:shadow-md py-2 px-1 sm:px-2 rounded-lg" href={project.url}
                        target="_blank" 
                        rel="noopener noreferrer">
                        <GoLinkExternal className="text-white" size={20}
                        aria-label={`View website for ${project.title}`} />
                        <span className="text-white">Website</span>
                    </a>
                    <a className="flex items-center gap-2 py-2 px-1 sm:px-2 rounded-lg bg-gray transition duration-200 hover:-translate-y-1 hover:shadow-md text-white"
                        href={project.code}
                        target="_blank" 
                        rel="noopener noreferrer">
                        <FaGithub className="text-white"  size={20}
                        aria-label={`View Code for ${project.title}`}/>
                        <span className="text-white">Code</span>
                    </a>
                    <DifficultyBadge level={project.level} />
                </div>
            </section>
        </motion.article>
    )
}