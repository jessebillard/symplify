import {
    GET_BOARDS, 
    CREATE_BOARD, 
    GET_LISTS,  
    CREATE_NOTE,
    SELECT_LIST,
    SELECT_BOARD
} from './types'
import { BoardAdapter } from '../adapters/boardAdapter'
import { NoteAdapter } from '../adapters/noteAdapter'
import { ListAdapter } from '../adapters/listAdapter'

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

export const createBoard = (boardTitle) => {
    return dispatch => {
        BoardAdapter.createBoard(boardTitle)
            .then(board => {
                dispatch({
                    type: CREATE_BOARD,
                    board
                })
            })
    }
}

export const getLists = () => {
    return dispatch => {
        ListAdapter.getLists()
            .then(lists => {
                dispatch({
                    type: GET_LISTS,
                    lists
                })
            })
    }
}

export const createNote = (data) => {
    return dispatch => {
        NoteAdapter.createNote(data)
            .then(note => {
                dispatch({
                    type: CREATE_NOTE,
                    note
                })
            })
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