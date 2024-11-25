import css from "./Layout.module.css"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Menu } from "../Menu/Menu"
import { Routing } from "../../Routing/Routing"
import { useInRouterContext } from "react-router"
import UserContext from "../../Context/UserContext"
import ThemeContext from "../../Context/ThemeContext"
import TodoContext from "../../Context/TodoContext"

import { ITodo } from "../../interfaces/ITodo"
import React, { useState } from "react"
import { text } from "stream/consumers"
export function Layout(): React.JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleTheme() {
        setIsDarkMode((prevMode) => !prevMode)
    }
    const siteStyle = {
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        height: "100vh"

    }

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [nextId, setNextId] = useState(1);

    const addTodo = (text: string) => {
        const newTodo = {
            id: nextId,
            text: text,
            isCompleted: false
        }
        setTodos([...todos, newTodo])
        setNextId(nextId + 1);
    }
    function toggleTodo(id: number) {
        const updateTodos = todos.map((todo) =>
            todo.id === id ?
                { ...todo, isCompleted: !todo.isCompleted }
                : todo
        );

        setTodos(updateTodos)
    }

    function deleteTodo(id: number) {
        const filterTodos = todos.filter(todo => todo.id !== id)
        setTodos(filterTodos)
    }
    return (
        <div className={css.Layout}>
            <TodoContext.Provider value={{ addTodo, toggleTodo, deleteTodo, todos }}>
                <ThemeContext.Provider value={{ isDarkMode, toggleTheme, siteStyle }}>
                    <UserContext.Provider value={{ email: "a@gmail.com", password: "123456" }}   >
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
                </ThemeContext.Provider>

            </TodoContext.Provider>

        </div>
    )



}


