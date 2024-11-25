import React, { useContext } from "react"
import ThemeContext from "../../Context/ThemeContext";
import UserContext from "../../Context/UserContext"
import css from "./Header.module.css"
export function Header():React.JSX.Element{
    const user = useContext(UserContext);
    const theme = useContext(ThemeContext)
    
    return(
        <div className={css.Header}  style={theme?.siteStyle}>
            <button style={{height:"60px"}} onClick={theme?.toggleTheme}>{theme?.isDarkMode?"🌛":"🌞"} </button>
            <p>welcome {user?.email}</p>
        </div>
    )
}