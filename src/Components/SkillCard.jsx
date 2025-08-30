import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

export default function SkillCard ({icon: Icon, label}){

    const {darkMode}= useContext(ThemeContext)
    return (
        <li className="flex flex-col items-center gap-2 font-nunito font-bold text-center h-28 transition transform hover:scale-105">
            <div className={`grid place-items-center bg-beige border p-3 rounded-2xl shadow-md ${darkMode ? "bg-dark-blue border-gray-700": "bg-beige border-[#CFC7B8]"}`}>
                <Icon className={`${darkMode? "text-beige": "text-very-dark-blue"}`} size={40}
                aria-hidden= "true" />
            </div>
            <p>{label}</p>
        </li>
    )
}