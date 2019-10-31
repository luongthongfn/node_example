const prevTodoState = [
    {
        id: 0,
        text: 'td0',
        isComplete: false,
        childs: [1, 2, 5]
    },
    {
        id: 1,
        text: 'td1',
        isComplete: false,
        childs: []
    },
    {
        id: 2,
        text: 'td2',
        isComplete: false,
        childs: [3, 4]
    },
    {
        id: 3,
        text: 'td2-1',
        isComplete: false,
        childs: []
    },
    {
        id: 4,
        text: 'td2-2',
        isComplete: false,
        childs: []
    },
    {
        id: 5,
        text: 'td3',
        isComplete: false,
        childs: []
    }
];

let nextId = 0;
function todoReducer(state = prevTodoState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: `new_${++nextId}`,
                    text: action.text,
                    isComplete: false,
                    childs: []
                }
            ];

        case 'REMOVE_TODO':
            console.log('sate: ', state, 'action: ', action)
            var index = state[action.parentId].childs.indexOf(action.id);
            state[action.parentId].childs.splice(index, 1);
            return state.filter(item => item.id !== action.id);

        case 'TOGGLE_COMPLETE_TODO':
            return state.map(item => {
                return action.id === item.id
                    ? { ...item, isComplete: !item.isComplete }
                    : item;
            });

        default:
            return state;
    }
}

export default todoReducer;
