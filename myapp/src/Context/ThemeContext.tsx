import {createContext, ReactNode, useState, useContext} from "react";
import { ITheme } from "../Interfaces/ITheme";
const ThemeContext = createContext<ITheme | undefined>(undefined)



export const ThemeProvide: React.FC<{children:ReactNode}> = ({children})=>{
    
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    function toggleTheme(){
        setIsDarkMode(!isDarkMode)
    }

    return(
        <div></div>
        // <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            
        // </ThemeContext.Provider>
    )
}

export default ThemeContext