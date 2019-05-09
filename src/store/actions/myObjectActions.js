import { ADD_ENTRY } from './actionsTypes'

export const addEntry = (entry) => {
    return {
        type: ADD_ENTRY,
        payload: entry
    }
}
