export default (state = { 
    boards: [],
    tasks: [], 
    lists: [],
    selectedList: '',
    selectedBoard: '',
    listOrder: [] 
}, action) => {
    switch (action.type) {
        case 'GET_BOARDS':            
            return {
                ...state,
                boards: action.boards
            } 
        case 'SELECT_LIST':
            return {
                ...state,
                selectedList: action.list
            }
        case 'SELECT_BOARD':
            return {
                ...state,
                selectedBoard: action.board
            }
        default:
            return state
    }
}