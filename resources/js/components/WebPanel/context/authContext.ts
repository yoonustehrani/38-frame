import { createContext } from "react";
import { User } from "../types";

export interface AuthContextObject {
    user: null | User
    login: (user: User) => void
    logout: () => void,
    disallow: () => void,
}

const initialObject = {
    user: null,
    login: () => {},
    logout: () => {},
    disallow: () => {}
}

const authContext = createContext<AuthContextObject>(initialObject)

export default authContext