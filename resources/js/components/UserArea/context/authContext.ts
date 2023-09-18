import { createContext } from "react";
import { User } from "../types";

const authContext = createContext<null | User>(null)

export default authContext