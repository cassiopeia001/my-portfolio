import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import Contact from "./Contact";
import {motion} from 'motion/react'
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
export default function ContactSection (){

    const {darkMode}= useContext(ThemeContext)

    const contactInfo = [
        {
            icon: MdEmail,
            type: "Email" ,
            value: "minabelabbesnabi01@gmail.com",
            href: "mailto:minabelabbesnabi01@gmail.com",
            label: "Send me an email"
        },
        {
            icon: FaPhoneAlt,
            type: "Phone Number" ,
            value: "0560569942",
            href: "tel:0560569942",
            label: "Call my number"
        },
        {
            icon: FaGithub,
            type: "Github" ,
            value:  "@cassiopeia001",
            href: "https://github.com/cassiopeia001",
            label: "Visit my Github profile"
        }
    ]
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}   
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} id="contact" className="flex flex-col gap-10 lg:text-lg">
             <h2 className={`font-raleway text-2xl lg:text-3xl font-extrabold 
                bg-gradient-to-r  ${darkMode? "from-blue-400 to-blue-300  ":"from-blue to-indigo-500 "} 
                bg-clip-text text-transparent relative w-fit
                `}>Contact</h2>
            <p className="font-semibold">
                I’m seeking opportunities to contribute to innovative projects and grow as a developer. Contact me to connect.
            </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {
                    contactInfo.map(contact => <Contact icon={contact.icon} type= {contact.type} value= {contact.value} href={contact.href} label= {contact.label} />)
                }
            </div>
        </motion.section>
    )
}