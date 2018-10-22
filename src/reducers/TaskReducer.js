import initialData from '../initial-data'
export default (state = Object.assign({selectedBoard: '', selectedLists: '', selectedListId: ''}, initialData), action) => {
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
        case 'SELECT_LIST':
            return {
                ...state,
                selectedListId: action.listId
            }
        case 'SELECT_BOARD':
            const lists = state.lists.filter(list => list.boardId === action.board.id)
            return {
                ...state,
                selectedBoard: action.board,
                selectedLists: lists
            }
        case 'CREATE_NOTE':
            const listsCopy = [...state.selectedLists]
            const listCopy = listsCopy.find(list => list.id === state.selectedListId) 
            const completeNote = Object.assign({id: state.noteIdCounter += 1}, action.note)   
            const notesCopy = [...state.notes]
            notesCopy.push(completeNote)        
            listCopy.noteOrder.unshift(completeNote.id)
            return {
                ...state, 
                selectedLists: listsCopy,
                notes: notesCopy               
            }
        default:
            return state
    }
}