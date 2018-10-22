import initialData from '../initial-data'
export default (state = Object.assign({selectedBoard: '', selectedLists: ''}, initialData), action) => {
    switch (action.type) {
        
        case 'CREATE_BOARD':
            const newBoard = {
                id: initialData['boardIdCounter'] += 1,
                title: action.boardTitle,
                columns: [],
                columnOrder: []
            }
            return {
                ...state,
                boards: [...state.boards, newBoard]
            }
        case 'GET_LISTS': 
            return {
                ...state,
                lists: action.lists
            }
        // case 'SELECT_LIST':
        //     return {
        //         ...state,
        //         selectedListId: action.listId
        //     }
        case 'SELECT_BOARD':
            const lists = state.lists.filter(list => list.boardId === action.board.id)
            return {
                ...state,
                selectedBoard: action.board,
                selectedLists: lists
            }
        // case 'CREATE_NOTE':
        //     const listsCopy = [...state.lists]
        //     const list = listsCopy.find(list => list.id === state.selectedListId)
        //     const newList = Object.assign({}, list)
        //     newList.notes.unshift(action.note)
        //     const index = listsCopy.indexOf(list)
        //     listsCopy.splice(index, 1, newList)
        //     return {
        //         ...state, 
        //         lists: listsCopy               
        //     }
        default:
            return state
    }
}