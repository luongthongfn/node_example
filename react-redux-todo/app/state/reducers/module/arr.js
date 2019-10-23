const preArrState = ['Note 1', 'Note 2', 'Note 3'];
const arr = (state = preArrState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return ([action.item, ...state]);
        case 'REMOVE_ITEM':
            return (state.filter((item, i) => i != action.index));
        default:
            return state;
    }
}

export default arr;