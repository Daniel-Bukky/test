import React, {createContext, useState, ReactNode, useContext} from "react";

import { ITheme } from "../interfaces/ITheme";

const ThemeContext = createContext<ITheme | undefined>(undefined)

export default ThemeContext; 




