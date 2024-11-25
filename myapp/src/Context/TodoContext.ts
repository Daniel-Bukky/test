import React, {createContext, useState, ReactNode, useContext} from "react";

import { TodoContextType } from "../interfaces/ITodo";

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export default TodoContext; 




