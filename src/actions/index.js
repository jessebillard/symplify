import {    
    CREATE_BOARD, 
    GET_LISTS,  
    CREATE_NOTE,
    CREATE_LIST,
    SELECT_LIST,
    DELETE_BOARD,
    SELECT_BOARD,
    SELECT_NOTE,
    DESELECT_NOTE,
    EDIT_NOTE,
    DELETE_LIST
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

export const createList = (listTitle) => {
    return {
        type: CREATE_LIST,
        listTitle
    }
}

export const deleteBoard = (boardId) => {
    return {
        type: DELETE_BOARD,
        boardId
    }
}

export const selectNote = (note) => {
    return {
        type: SELECT_NOTE,
        note
    }
}

export const deselectNote = () => {
    return {
        type: DESELECT_NOTE,
        payload: 's'
    }
}

export const editNote = (note, id) => {
    return {
        type: EDIT_NOTE,
        note,
        id
    }
}

export const deleteList = (listId) => {
    return {
        type: DELETE_LIST,
        listId
    }
}