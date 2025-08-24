import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import Contact from "./Contact";
import {motion} from 'motion/react'
export default function ContactSection (){

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
             <h2 className="font-raleway text-xl lg:text-2xl font-bold relative w-fit
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-full after:h-[4px] after:bg-light-orange
                after:shadow-[0_3px_4px_rgba(0,0,0,0.25)]">CONTACT</h2>
            <p>
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