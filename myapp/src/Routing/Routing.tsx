import {Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {About} from "../pages/About/About"
import {Posts} from "../pages/Posts/Posts"

import {PageNotFound} from "../pages/PageNotFound/PageNotFound"
import React, { useContext } from "react"
import ThemeContext from "../Context/ThemeContext"

export function Routing():JSX.Element{
    const theme = useContext(ThemeContext)
    const siteStyle = {
        backgroundColor:theme?.isDarkMode?"black":"white",
        color:theme?.isDarkMode?"white":"black",
        height:"100vh"
    }

    return(
        <div style={siteStyle}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}
