import React, {createContext, useState, ReactNode, useContext} from "react";

import { TodoContextType } from "../Interfaces/ITodo";

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export default TodoContext; 




