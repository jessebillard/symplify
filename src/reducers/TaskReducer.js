export default (state = { 
    boards: [],
    tasks: [], 
    lists: [],
    listOrder: [] 
}, action) => {
    switch (action.type) {
        case 'GET_BOARDS':            
            return {
                ...state,
                boards: [...state.boards, action.boards]
            } 
        default:
            return state
    }
}