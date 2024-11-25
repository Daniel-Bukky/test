import React, {createContext} from "react";

import { IUSer } from "../interfaces/IUser";

const UserContext = createContext<IUSer | undefined>(undefined)

export default  UserContext; 



