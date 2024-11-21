import React from "react"
import UserContext from "../../Context/UserContext"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Menu } from "../Menu/Menu"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Routing } from "../../Routing/Routing"

export function Layout(): React.JSX.Element{

    return(
        <div>
            <UserContext.Provider value={{email:"a@gmail.com", password:"123456"}}>
                <header>
                    <Header />
                </header>

                <aside>
                    <Menu />
                </aside>

                <main>
                    <Routing />
                </main>

                <footer>
                    <Footer />
                </footer>
            </UserContext.Provider>
        </div>
    )
}