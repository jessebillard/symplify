const initialData = {
    boardIdCounter: 4,
    listIdCounter: 12,
    noteIdCounter: 8,
    boards: [
        {id: 1, title: 'sick board', listOrder: ['list-1', 'list-2', 'list-3']},
        {id: 2, title: 'on board', listOrder: ['list-4', 'list-5', 'list-6']},
        {id: 3, title: 'so board', listOrder: ['list-7', 'list-8', 'list-9']},
        {id: 4, title: 'bored board', listOrder: ['list-10', 'list-11', 'list-12']}
    ],
    notes: [
        { id: 1, listId: 1, description: 'it smelling', title: 'take out the garbage'},
        { id: 2, listId: 1, description: 'anime fersure', title: 'watch the toobe'},
        { id: 3, listId: 1, description: 'ALL THE FOODS', title: 'buy the foods'},
        { id: 4, listId: 4, description: 'ALL THE FOODS MUST BE EATING', title: 'eat the foods'},
        { id: 5, listId: 4, description: 'best boi', title: 'be boi'},
        { id: 6, listId: 7, description: 'need bae', title: 'find bae'},
        { id: 7, listId: 7, description: 'calling for you bae', title: 'where is bae?'},
        { id: 8, listId: 10, description: 'g doulbe o D',  title: 'so goooood'},
    ],
    lists: [
        {
            id: 1,
            title: 'To do',
            noteOrder: [1, 2, 3],
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
            noteOrder: [4, 5],
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
            noteOrder: [6, 7],
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
            noteOrder: [8],
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