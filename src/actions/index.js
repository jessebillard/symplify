import {
    GET_BOARDS,    
    CREATE_NOTE,
    SELECT_LIST,
    SELECT_BOARD
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

export const selectedList = (list) => {
    return {
        type: SELECT_LIST,
        list
    }
}

export const selectedBoard = (board) => {
    return {
        type: SELECT_BOARD,
        board
    }
}