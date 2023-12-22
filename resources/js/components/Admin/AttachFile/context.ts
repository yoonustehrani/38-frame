import { createContext } from "react";

export const FileOverLayContext = createContext({
    show: () => {},
    hide: () => {},
    toggle: () => {}
})