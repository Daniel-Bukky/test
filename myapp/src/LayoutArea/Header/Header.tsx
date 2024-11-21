import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import css from "./Header.module.css"


export function Header():React.JSX.Element{
    const user = useContext(UserContext)
    return(
        <div className={css.Header}>
            <p>welcome {user?.email}</p>
        </div>
    )
}