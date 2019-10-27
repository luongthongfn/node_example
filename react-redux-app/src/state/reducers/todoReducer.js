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

function todoReducer(state = prevTodoState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { text: action.text, isComplete: false }];

        case 'REMOVE_TODO':
            return state.filter((item, i) => i !== action.index);

        case 'TOGGLE_COMPLETE_TODO':
            return state.map((item, i) => {
                return action.index === i
                    ? { text: item.text, isComplete: !item.isComplete }
                    : item;
            });

        default:
            return state;
    }
}

export default todoReducer;
