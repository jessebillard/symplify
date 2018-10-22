const initialData = {
    boardIdCounter: 4,
    listIdCounter: 12,
    noteIdCounter: 8,
    boards: [
        {id: 1, title: 'sick board', lists: ['list-1', 'list-2', 'list-3'], listOrder: ['list-1', 'list-2', 'list-3']},
        {id: 2, title: 'on board', lists: ['list-4', 'list-5', 'list-6'], listOrder: ['list-4', 'list-5', 'list-6']},
        {id: 3, title: 'so board', lists: ['list-7', 'list-8', 'list-9'], listOrder: ['list-7', 'list-8', 'list-9']},
        {id: 4, title: 'bored board', lists: ['list-10', 'list-11', 'list-12'], listOrder: ['list-10', 'list-11', 'list-12']}
    ],
    notes: [
        { id: 1, listId: 1, title: 'take out the garbage'},
        { id: 2, listId: 1, title: 'watch the toobe'},
        { id: 3, listId: 1, title: 'buy the foods'},
        { id: 4, listId: 4, title: 'eat the foods'},
        { id: 5, listId: 4, title: 'be boi'},
        { id: 6, listId: 7, title: 'find bae'},
        { id: 7, listId: 7, title: 'where is bae?'},
        { id: 8, listId: 10, title: 'so goooood'},
    ],
    lists: [
        {
            id: 1,
            title: 'To do',
            noteOrder: ['note-1', 'note-2', 'note-3'],
            boardId: 1
        },
        {
            id: 2,
            title: 'In progress',
            noteOrder: [],
            boardId: 1
        },
        {
            id: 3,
            title: 'Done',
            noteOrder: [],
            boardId: 1
        },
        {
            id: 4,
            title: 'test',
            noteOrder: ['note-5', 'note-4'],
            boardId: 2
        },
        {
            id: 5,
            title: 'super',
            noteOrder: [],
            boardId: 2
        },
        {
            id: 6,
            title: 'duper',
            noteOrder: [],
            boardId: 2
        },
        {
            id: 7,
            title: 'sickness',
            noteOrder: ['note-6', 'note-7'],
            boardId: 3
        },
        {
            id: 8,
            title: 'legitness',
            noteOrder: [],
            boardId: 3
        },
        {
            id: 9,
            title: 'wonton sup',
            noteOrder: [],
            boardId: 3
        },
        {
            id: 10,
            title: 'dumpling king',
            noteOrder: ['note-8'],
            boardId: 4
        },
        {
            id: 11,
            title: 'suhp boi',
            noteOrder: [],
            boardId: 4
        },
        {
            id: 12,
            title: 'okey dokey',
            noteOrder: [],
            boardId: 4
        },
    ],    
}

export default initialData