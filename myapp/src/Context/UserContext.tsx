import React, {createContext} from "react";

import { IUSer } from "../Interfaces/IUser";

const UserContext = createContext<IUSer | undefined>(undefined)

export default  UserContext; 



