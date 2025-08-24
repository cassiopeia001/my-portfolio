import { LuCircleDot } from "react-icons/lu";
export default function DifficultyBadge ({level}){
    const diffficultyStyles= {
        Advanced: "bg-red text-pink",
        Intermediate: "bg-mustard text-light-yellow"
    }
    return(
        <span className={`flex items-center gap-2 py-2 px-1 sm:px-2 rounded-lg ${diffficultyStyles[level]}`} 
        aria-label={`Difficulty: ${level}`}>
            <LuCircleDot aria-hidden="true"/>

            {level}
        </span>
    )
}