import { useReducer, useState } from "react";


interface ReducerAction {
    type: string
    payload?: any
}

// interface AddToGroupAction extends ReducerAction {
//     type: 'ADD_TO_GROUP',
//     payload: 
// }
type GroupItem = {id: number}

function groupActionsReducer<T extends GroupItem>(state: T[], action: ReducerAction) {
    switch (action.type) {
        case 'ADD_TO_GROUP':
            return [...state, {...action.payload} as T]
        case 'REMOVE_FROM_GROUP':
            return state.filter(x => x.id !== action.payload)
        case 'INCLUDE_ALL':
            return action.payload as T[]
        case 'EXCLUDE_ALL':
            return []
        default:
            return state
    }
}

export function useGroupActionList<T extends GroupItem>(initialItems: T[]) { // , key: keyof T
    const [items, dispatch] = useReducer(groupActionsReducer<T>, initialItems)
    return {
        items: items.map(x => x.id),
        toggle: (item: T) => {
            if (items.map(x => x.id).includes(item.id)) {
                dispatch({type: 'REMOVE_FROM_GROUP', payload: item.id})
            } else {
                dispatch({type: 'ADD_TO_GROUP', payload: item})
            }
        },
        // toggleAll: (allItems: T[]) => {

        // },
        // add: (item: T) => dispatch({type: 'ADD_TO_GROUP', payload: item}),
        // remove: (id: number) => dispatch({type: 'REMOVE_FROM_GROUP', payload: id}),
        includeAll: (allItems: T[]) => dispatch({type: 'INCLUDE_ALL', payload: allItems}),
        excludeAll: () => dispatch({type: 'EXCLUDE_ALL'})
    }
}