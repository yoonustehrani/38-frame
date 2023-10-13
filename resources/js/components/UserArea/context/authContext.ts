import { createContext } from "react";
import { User } from "../types";

interface AuthContextObject {
    user: null | User
    login: (user: User) => void
    logout: () => void
}

const initialObject = {
    user: null,
    login: () => {},
    logout: () => {},
}

const authContext = createContext<AuthContextObject>(initialObject)

export default authContext