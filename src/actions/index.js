import {    
    CREATE_BOARD, 
    GET_LISTS,  
    CREATE_NOTE,
    SELECT_LIST,
    SELECT_BOARD
} from './types'

export const createBoard = (boardTitle) => {
    return {
        type: CREATE_BOARD,
        boardTitle
    }
}

export const selectedList = (listId) => {
    return {
        type: SELECT_LIST,
        listId
    }
}

export const selectedBoard = (board) => {
    return {
        type: SELECT_BOARD,
        board
    }
}

export const createNote = (note) => {
    return {
        type: CREATE_NOTE,
        note
    }
}