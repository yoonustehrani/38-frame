import { FilteringActions, initialFilters } from "./types";

export function filtersReducer(state: typeof initialFilters, action: FilteringActions) {
    switch (action.type) {
        case 'SET_FILTER':
            return {...state, ...action.payload}
        case 'REMOVE_FILTER':
            // Object.entries(state).filter(([k, v]) => k == action.payload)
            return {...state, [action.payload]: null}
        default:
            break;
    }
    return state
}