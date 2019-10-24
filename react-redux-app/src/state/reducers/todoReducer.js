const prevTodoState = [
    {
        text: 'td1',
        isComplete: false
    },
    {
        text: 'td2',
        isComplete: false,
        todo: [
            {
                text: 'td2-1',
                isComplete: false, 
            },
            {
                text: 'td2-2',
                isComplete: false, 
            }
        ]
    },
    {
        text: 'td3',
        isComplete: false
    },
]

function todoReducer(state = prevTodoState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {text: action.text, isComplete: false}]
            
        case 'DEL_TODO':
            return state.filter((item, i)=> i!== action.index)
            
        case 'TOGGLE_COMPLETE_TODO':
            let state1 = state
            state1[action.index].isComplete = !state1[action.index].isComplete
            return state1
    
        default:
            return state;
    }
}

export default todoReducer;