import initialData from '../initial-data'
export default (
    state = Object.assign({
        selectedBoard: '', 
        selectedListsOrder: '', 
        selectedNotes: '',
        selectedListId: '',
        selectedNote: ''
    }, initialData), action) => {        
    switch (action.type) {        
        case 'CREATE_BOARD':
            const newBoard = {
                id: `board-${initialData['boardIdCounter'] += 1}`,
                title: action.boardTitle,
                columns: [],
                listOrder: []
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
            const listsOnBoard = state.lists.filter(list => list.boardId === action.board.id) 
            const notesOnLists = []
            listsOnBoard.forEach(list => {
                if (list.noteOrder.length > 0) {
                    list.noteOrder.forEach(noteId => {
                        const note = state.notes.find(note => note.id === noteId)
                        notesOnLists.push(note)
                    })
                }
            })           
            const listOrder = []
            action.board.listOrder.forEach(listId => {
                const list = listsOnBoard.find(list => list.id === listId)
                listOrder.push(list)
            })             
            return {
                ...state,
                selectedBoard: action.board,
                selectedListsOrder: listOrder,
                selectedNotes: notesOnLists
            }
        case 'CREATE_NOTE':
            const listsCopy = [...state.selectedListsOrder]
            const listCopy = listsCopy.find(list => list.id === state.selectedListId) 
            const completeNote = Object.assign({id: `note-${state.noteIdCounter += 1}`}, action.note)   
            const notesCopy = [...state.notes]
            notesCopy.push(completeNote)        
            listCopy.noteOrder.unshift(completeNote.id)
            // debugger
            return {
                ...state, 
                selectedListsOrder: listsCopy,
                selectedNotes: notesCopy,
                notes: notesCopy             
            }
        case 'CREATE_LIST':             
            const newList = {
                id: `list-${state.listIdCounter += 1}`,
                title: action.listTitle,
                noteOrder: [],
                boardId: state.selectedBoard.id
            } 
            const boardWithNewList = Object.assign({}, state.selectedBoard)
            boardWithNewList.listOrder.push(newList.id) 
            const boardsMainCopy = [...state.boards]
            const board2Update = boardsMainCopy.find(board => board.id === boardWithNewList.id)
            const boardIndexCopy = boardsMainCopy.indexOf(board2Update)
            boardsMainCopy.splice(boardIndexCopy, 1, boardWithNewList)
            return {
                ...state,
                lists: [...state.lists, newList],
                selectedListsOrder: [...state.selectedListsOrder, newList],
                selectedBoard: boardWithNewList,
                boards: boardsMainCopy
            }
        case 'DELETE_BOARD':            
            const boardsCopy = [...state.boards]
            const filteredBoards = boardsCopy.filter(board => board.id !== action.boardId)            
            return {
                ...state,
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
            newEditedNote.isCompleted = action.note.isCompleted
            return {
                ...state,
                notes: editNotesCopy
            }
        case 'DELETE_LIST':            
            const filteredLists = state.lists.filter(list => list.id !== action.listId)
            const filteredNotes = state.notes.filter(note => note.listId !== action.listId)
            const filteredSelectedLists = state.selectedListsOrder.filter(list => list.id !== action.listId)
            const newBoardCopy = Object.assign({}, state.selectedBoard)
            const listIndex = newBoardCopy.listOrder.indexOf(action.listId)
            newBoardCopy.listOrder.splice(listIndex, 1)
            const boardsFilterCopy = [...state.boards]
            const board = boardsFilterCopy.find(board => board.id === newBoardCopy.id)
            const boardIndex = boardsFilterCopy.indexOf(board)
            boardsFilterCopy.splice(boardIndex, 1, newBoardCopy)
            return {
                ...state,
                lists: filteredLists,
                notes: filteredNotes,
                selectedListsOrder: filteredSelectedLists,
                selectedBoard: newBoardCopy,
                boards: boardsFilterCopy
            }
        case 'EDIT_LIST_TITLE':
            const listEditCopy = [...state.selectedListsOrder]
            const listToChangeTitle = listEditCopy.find(list => list.id === state.selectedListId)
            const newListCopy = Object.assign({}, listToChangeTitle)
            newListCopy.title = action.listTitle
            const mainListCopy = [...state.lists]
            const mainListToChangeTitle = mainListCopy.find(list => list.id === state.selectedListId)
            mainListToChangeTitle.title = action.listTitle
            return {
                ...state,
                selectedListsOrder: listEditCopy,
                lists: mainListCopy
            }
        case 'EDIT_BOARD_TITLE':
            const boardsEditCopy = [...state.boards]
            const boardToChangeTitle = boardsEditCopy.find(board => board.id === action.boardId)
            boardToChangeTitle.title = action.newBoardTitle
            return {
                ...state,
                boards: boardsEditCopy
            }
        case 'REORDER_LISTS':                        
            const boardWithNewListOrder = Object.assign({}, state.selectedBoard)
            const mainBoardsCopy = [...state.boards]
            boardWithNewListOrder.listOrder = action.lists.map(list => list.id)
            mainBoardsCopy.forEach(board => {
                if (board.id === boardWithNewListOrder.id) {
                    board.listOrder = boardWithNewListOrder.listOrder
                }
            })
            return {
                ...state,
                selectedBoard: boardWithNewListOrder,
                selectedListsOrder: action.lists,
                boards: mainBoardsCopy
            }
        case 'REORDER_NOTES':            
            // update the noteOrder of the lists involved
            // for same list             
            const mainListsCopy = [...state.lists] 
            const mainSelectedListsCopy = [...state.selectedListsOrder]           
            if (!action.destinationList) {
                const listWithNewOrder = mainListsCopy.find(list => list.id === action.sourceList.id)
                listWithNewOrder.noteOrder = action.startNoteOrder
                const selectedList = mainSelectedListsCopy.find(list => list.id === action.sourceList.id)
                const index = mainSelectedListsCopy.indexOf(selectedList)
                mainSelectedListsCopy.splice(index, 1, listWithNewOrder)
                return {
                    ...state,
                    lists: mainListsCopy,
                    selectedListsOrder: mainSelectedListsCopy
                }
            } else {
                // debugger
                // for different lists
                // update the listId of the dragged note in initialData
                const newNotesCopy = [...state.notes]
                const noteWithNewListId = newNotesCopy.find(note => note.id === action.noteId)
                noteWithNewListId.listId = action.destinationList.id

                // update the lists
                const newStartList = mainListsCopy.find(list => list.id === action.sourceList.id)
                const newFinishList = mainListsCopy.find(list => list.id === action.destinationList.id)
                newStartList.noteOrder = action.startNoteOrder
                newFinishList.noteOrder = action.finishNoteOrder

                // update selectedListsOrder
                const newStartSelectedList = mainSelectedListsCopy.find(list => list.id === action.sourceList.id)
                const newFinishSelectedList = mainSelectedListsCopy.find(list => list.id === action.destinationList.id)
                newStartSelectedList.noteOrder = action.startNoteOrder
                newFinishSelectedList.noteOrder = action.finishNoteOrder

                return {
                    ...state,
                    notes: newNotesCopy,
                    lists: mainListsCopy,
                    selectedListsOrder: mainSelectedListsCopy
                }
            }
        default:
            return state
    }
}