import React, { useContext } from "react";
import {Link} from "react-router-dom"
import ThemeContext from "../../Context/ThemeContext";
import UserContext from "../../Context/UserContext";
import css from "./Menu.module.css"
export function Menu():React.JSX.Element{
    const theme = useContext(ThemeContext)

    return(
        <nav  className={css.Menu}>
            <Link className={css.link} to="/">Home</Link>
            <Link className={css.link} to="/about">About</Link>
            <Link className={css.link} to="/posts">Posts</Link>
        </nav>
    )
}
