import {createContext} from "react";
import { IUser } from "../Interfaces/IUser";
const UserContext = createContext<IUser | undefined>(undefined)

export default UserContext