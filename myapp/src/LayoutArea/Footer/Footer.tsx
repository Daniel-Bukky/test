import React,{ useContext } from "react"
import ThemeContext from "../../Context/ThemeContext"
import css from "./Footer.module.css"
export function Footer():JSX.Element{

    const theme = useContext(ThemeContext)

    return(
        <div className={css.Footer} style={theme?.siteStyle}>
            <p>Footer</p>
        </div>
    )
}