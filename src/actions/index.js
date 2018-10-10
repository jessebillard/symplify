import {
    GET_BOARDS,
    GET_LISTS,
    GET_NOTES
} from './types'
import { BoardAdapter } from '../adapters/boardAdapter'

export const getBoards = () => {
    return dispatch => {
        BoardAdapter.getBoards()
            .then(boards => {    
                // console.log(boards)            
                dispatch ({
                    type: GET_BOARDS,
                    boards
                })
            })
    }
}