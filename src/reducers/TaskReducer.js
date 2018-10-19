export default (state = { 
    boards: [],
    tasks: [], 
    lists: [],
    selectedListId: '',
    selectedBoard: '',
    listOrder: [],    
}, action) => {
    switch (action.type) {
        case 'GET_BOARDS':            
            return {
                ...state,
                boards: action.boards
            } 
        case 'CREATE_BOARD':
            return {
                ...state,
                boards: [...state.boards, action.board]
            }
        case 'GET_LISTS': 
            return {
                ...state,
                lists: action.lists
            }
        case 'SELECT_LIST':
            return {
                ...state,
                selectedListId: action.listId
            }
        case 'SELECT_BOARD':
            return {
                ...state,
                selectedBoard: action.board
            }
        case 'CREATE_NOTE':
            const listsCopy = [...state.lists]
            const list = listsCopy.find(list => list.id === state.selectedListId)
            const newList = Object.assign({}, list)
            newList.notes.unshift(action.note)
            const index = listsCopy.indexOf(list)
            listsCopy.splice(index, 1, newList)
            return {
                ...state, 
                lists: listsCopy               
            }
        default:
            return state
    }
}