import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"
import {motion} from 'motion/react'

export default function HeroSection (){
    const {darkMode}= useContext(ThemeContext)
    return (
        <motion.section
            initial={{ opacity: 0,  y: 40 }}   
            animate={{ opacity: 1, y:0}} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="">
            <div className="flex flex-col gap-10">

                <h2 className="font-raleway font-bold text-3xl lg:text-4xl relative w-fit before:content-[''] before:absolute before:left-0 before:top-4.5
                    before:h-4 before:w-full before:bg-light-orange before:opacity-70 
                    before:z-0 before:mix-blend-multiply before:blur-[6px]">Welcome to my portfolio</h2>
                <h2 className="font-nunito font-bold text-lg leading-9 lg:text-xl">Hi! my name is <span className={`text-xl lg:text-2xl ${darkMode? "text-light-blue":"text-blue"}`} >Mina Belabbes Nabi</span>, and i am a <span className={`text-xl lg:text-2xl ${darkMode? "text-light-blue":"text-blue"}`}>Front-end Engineer.</span></h2>    
            </div>
        </motion.section>
    )
}