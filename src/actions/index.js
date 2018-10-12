import {
    GET_BOARDS,    
    CREATE_NOTE,
    SELECT_LIST
} from './types'
import { BoardAdapter } from '../adapters/boardAdapter'
import { NoteAdapter } from '../adapters/noteAdapter'

export const getBoards = () => {
    return dispatch => {
        BoardAdapter.getBoards()
            .then(boards => {                            
                dispatch ({
                    type: GET_BOARDS,
                    boards
                })
            })
    }
}

export const createNote = (data) => {
    return dispatch => {
        NoteAdapter.createNote(data)
            
    }
}

export const selectedList = (id) => {
    return {
        type: SELECT_LIST,
        list: id
    }
}