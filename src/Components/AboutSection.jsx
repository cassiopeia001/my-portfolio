import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"
import {motion} from 'motion/react'

export default function AboutSection (){
    const {darkMode}=useContext(ThemeContext)
    return (
        <motion.section id="about" 
            initial={{ opacity: 0, y: 50 }}   
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} 
            className="font-nunito flex flex-col gap-7">
            <h2 className={`font-raleway text-2xl lg:text-3xl font-extrabold 
                bg-gradient-to-r ${darkMode? "from-blue-400 to-blue-300  ":"from-blue to-indigo-500 "} 
                bg-clip-text text-transparent relative w-fit
                `}>
                About Me 
            </h2>
            <p className="font-medium max-w-prose lg:text-lg xl:text-xl leading-loose">I’m a Software Engineering graduate and frontend-focused developer skilled in React and Javascript. 
                I specialize in translating designs into pixel-perfect, 
                responsive and accessible websites that function seamlessly across devices. Recently, I’ve been expanding my expertise into backend development, learning Node.js, Express, and RESTful APIs to build more complete, data-driven solutions.</p>    
            <div className="grid gap-6 md:grid-cols-2">
                <div className={`p-4 rounded-xl border ${darkMode ?"bg-gray-800/50  border-gray-700":"bg-beige border-[#CFC7B8]"}  hover:border-blue-500 transition`}>
                    <p className="font-bold">Master’s Degree in 
                    <span className={`${darkMode? "text-light-blue":"text-blue"} `}> Software Engineering</span>
                    </p>
                    <p className={`${darkMode? "text-dark-secondary-text":"text-gray"}  text-sm`}>Saad Dahleb Blida 1 University</p>
                    <p className={`text-sm ${darkMode?"text-gray-400":"text-gray-500"}`}>2021 – 2023</p>
                </div>

                <div className={`p-4 rounded-xl border ${darkMode ?"bg-gray-800/50  border-gray-700":"bg-beige border-[#CFC7B8]"}  hover:border-blue-500 transition`}>
                    <p className="font-bold">Bachelor’s Degree in 
                    <span className={`${darkMode? "text-light-blue":"text-blue"} `}> Computer Systems</span>
                    </p>
                    <p className={`${darkMode? "text-dark-secondary-text":"text-gray"}  text-sm`}>Saad Dahleb Blida 1 University</p>
                   <p className={`text-sm ${darkMode?"text-gray-400":"text-gray-500"}`}>2018 – 2021</p>
                </div>
            </div>
        </motion.section>
    )
}