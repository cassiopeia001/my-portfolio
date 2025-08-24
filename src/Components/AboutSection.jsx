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
            className="font-nunito flex flex-col gap-6">
            <h2 className="font-raleway text-xl lg:text-2xl font-bold relative w-fit
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-full after:h-[4px] after:bg-light-orange
                after:shadow-[0_3px_4px_rgba(0,0,0,0.25)]">ABOUT</h2>
            <p className="font-medium max-w-prose lg:text-lg">I have a degree in Software Engineering and am proficient in React and Javascript. 
                I specialize in translating designs into pixel-perfect, 
                responsive and accessible websites that function seamlessly across devices.</p>    
            <div className="pl-3 flex flex-col gap-4 lg:text-lg">
                <h3 className={`text-lg lg:text-xl text-blue font-bold font-raleway h-fit relative before:absolute before:content-[''] 
                before:h-3.5 before:top-2 before:w-1 before:-left-4 
                before:bg-light-orange before:shadow-[0_3px_4px_rgba(0,0,0,0.25)] ${darkMode? "text-light-blue":"text-blue"}`}>EDUCATION</h3>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Master’s Degree in <span className={`${darkMode? "text-light-blue":"text-blue"}`}>Software Engineering</span></p>
                    <p>[<span className={`${darkMode? "text-dark-secondary-text":"text-gray"}`}>Saad Dahleb Blida 1 University</span>] - [<time className={`${darkMode? "text-dark-secondary-text":"text-gray"}`} dateTime="2021">2021</time>-<time className={`${darkMode? "text-dark-secondary-text":"text-gray"}`} dateTime="2023">2023</time>]</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Bachelor’s degree in <span className={`${darkMode? "text-light-blue":"text-blue"}`}>Computer Systems</span></p>
                    <p>[<span className={`${darkMode? "text-dark-secondary-text":"text-gray"}`}>Saad Dahleb Blida 1 University</span>] - [<time className={`${darkMode? "text-dark-secondary-text":"text-gray"}`} dateTime="2018">2018</time>-<time className={`${darkMode? "text-dark-secondary-text":"text-gray"}`} dateTime="2021">2021</time>]</p>
                </div>
            </div>
        </motion.section>
    )
}