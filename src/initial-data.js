const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'take out the garbage'},
        'task-2': { id: 'task-2', content: 'watch the toobe'},
        'task-3': { id: 'task-3', content: 'buy the foods'},
        'task-4': { id: 'task-4', content: 'eat the foods'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: []
        },
        'column-4': {
            id: 'column-4',
            title: 'test',
            taskIds: []
        },
        'column-5': {
            id: 'column-5',
            title: 'testing',
            taskIds: []
        },
        'column-6': {
            id: 'column-6',
            title: 'testing',
            taskIds: []
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6']
}

export default initialData