export default (state = { 
    boards: [],
    tasks: [], 
    lists: [],
    selectedList: '',
    listOrder: [] 
}, action) => {
    switch (action.type) {
        case 'GET_BOARDS':            
            return {
                ...state,
                boards: [...state.boards, action.boards]
            } 
        case 'SELECT_LIST':
            return {
                ...state,
                selectedList: action.list
            }
        default:
            return state
    }
}