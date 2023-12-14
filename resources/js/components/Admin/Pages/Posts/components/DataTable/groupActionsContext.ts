import { createContext } from "react";

interface GroupActions {
    items: number[];
    toggle: (id: number) => void;
    includeAll: () => void;
    excludeAll: () => void;
}

const groupActionsContext = createContext<GroupActions>({
    items: [],
    toggle: (id: number) => {},
    includeAll: () => {},
    excludeAll: () => {}
})

export default groupActionsContext