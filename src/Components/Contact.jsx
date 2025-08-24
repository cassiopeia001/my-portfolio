import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

export default function Contact ({icon: Icon, type, value, href , label}){
    const {darkMode}= useContext(ThemeContext)
    return (
        <div className="flex items-center gap-5 font-nunito font-bold lg:text-lg">
            <Icon  size={25}/>
            <div>
                <h3 className={`font-raleway font-normal ${darkMode ? "text-dark-secondary-text":"text-gray"}`}>{type}</h3>
                <a className={`${darkMode ? "hover:text-beige/80": "hover:text-very-dark-blue/80"} underline`}
                    target="_blank"  
                    rel="noopener noreferrer"
                    href= {href} 
                    aria-label={label} >{value}</a>
            </div>
        </div>
    )
}