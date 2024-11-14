import React from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css"

export function Navbar(): React.JSX.Element {

    return (
        <nav className={css.container}>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/team">Team</Link>
            </div>
        </nav>
    )
}