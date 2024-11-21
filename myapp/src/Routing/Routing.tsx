import {Routes, Route} from "react-router-dom"

import { Home } from "../pages/Home/Home"
import { About } from "../pages/About/About"
import React from "react"
import { Team } from "../pages/Team/Team"
import { PageNotFound } from "../pages/PageNotFound/PageNotFound"


export function Routing():React.JSX.Element{

    return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
    )
}