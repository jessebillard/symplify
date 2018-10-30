const initialData = {
    boardIdCounter: 4,
    listIdCounter: 12,
    noteIdCounter: 8,
    boards: [
        {id: 'board-1', title: 'sick board', listOrder: ['list-2', 'list-1', 'list-3']},
        {id: 'board-2', title: 'on board', listOrder: ['list-5', 'list-4', 'list-6']},
        {id: 'board-3', title: 'so board', listOrder: ['list-8', 'list-7', 'list-9']},
        {id: 'board-4', title: 'bored board', listOrder: ['list-11', 'list-10', 'list-12']}
    ],
    notes: [
        { id: 'note-1', listId: 'list-1', description: 'it smelling', title: 'take out the garbage'},
        { id: 'note-2', listId: 'list-1', description: 'anime fersure', title: 'watch the toobe'},
        { id: 'note-3', listId: 'list-1', description: 'ALL THE FOODS', title: 'buy the foods'},
        { id: 'note-4', listId: 'list-4', description: 'ALL THE FOODS MUST BE EATING', title: 'eat the foods'},
        { id: 'note-5', listId: 'list-4', description: 'best boi', title: 'be boi'},
        { id: 'note-6', listId: 'list-7', description: 'need bae', title: 'find bae'},
        { id: 'note-7', listId: 'list-7', description: 'calling for you bae', title: 'where is bae?'},
        { id: 'note-8', listId: 'list-10', description: 'g doulbe o D',  title: 'so goooood'},
    ],
    lists: [
        {
            id: 'list-1',
            title: 'To do',
            noteOrder: ['note-1'],
            boardId: 'board-1'
        },
        {
            id: 'list-2',
            title: 'In progress',
            noteOrder: ['note-2'],
            boardId: 'board-1'
        },
        {
            id: 'list-3',
            title: 'Done',
            noteOrder: ['note-3'],
            boardId: 'board-1'
        },
        {
            id: 'list-4',
            title: 'test',
            noteOrder: ['note-5', 'note-4'],
            boardId: 'board-2'
        },
        {
            id: 'list-5',
            title: 'super',
            noteOrder: [],
            boardId: 'board-2'
        },
        {
            id: 'list-6',
            title: 'duper',
            noteOrder: [],
            boardId: 'board-2'
        },
        {
            id: 'list-7',
            title: 'sickness',
            noteOrder: ['note-7', 'note-6'],
            boardId: 'board-3'
        },
        {
            id: 'list-8',
            title: 'legitness',
            noteOrder: [],
            boardId: 'board-3'
        },
        {
            id: 'list-9',
            title: 'wonton sup',
            noteOrder: [],
            boardId: 'board-3'
        },
        {
            id: 'list-10',
            title: 'dumpling king',
            noteOrder: ['note-8'],
            boardId: 'board-4'
        },
        {
            id: 'list-11',
            title: 'suhp boi',
            noteOrder: [],
            boardId: 'board-4'
        },
        {
            id: 'list-12',
            title: 'okey dokey',
            noteOrder: [],
            boardId: 'board-4'
        },
    ],    
}

export default initialData