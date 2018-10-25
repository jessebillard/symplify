import initialData from '../initial-data'
export default (
    state = Object.assign({
        selectedBoard: '', 
        selectedLists: '', 
        selectedListId: '',
        selectedNote: ''
    }, initialData), action) => {
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
        case 'CREATE_LIST': 
            const newList = {
                id: state.listIdCounter++,
                title: action.listTitle,
                noteOrder: [],
                boardId: state.selectedBoard.id
            }            
            return {
                ...state,
                lists: [...state.lists, newList],
                selectedLists: [...state.selectedLists, newList]
            }
        case 'DELETE_BOARD':            
            const boardsCopy = [...state.boards]
            const filteredBoards = boardsCopy.filter(board => board.id !== action.boardId)            
            return {
                boards: filteredBoards
            }
        case 'SELECT_NOTE':            
            return {
                ...state,
                selectedNote: action.note
            }
        case 'DESELECT_NOTE':
            return {
                ...state,
                selectedNote: ''
            }
        case 'EDIT_NOTE':             
            const editNotesCopy = [...state.notes]
            const newEditedNote = editNotesCopy.find(note => note.id === action.id)
            newEditedNote.title = action.note.title
            newEditedNote.description = action.note.description
            return {
                ...state,
                notes: editNotesCopy
            }
        case 'DELETE_LIST':            
            const filteredLists = state.lists.filter(list => list.id !== action.listId)
            const filteredNotes = state.notes.filter(note => note.listId !== action.listId)
            const filteredSelectedLists = state.selectedLists.filter(list => list.id !== action.listId)            
            return {
                ...state,
                lists: filteredLists,
                notes: filteredNotes,
                selectedLists: filteredSelectedLists
            }

        default:
            return state
    }
}