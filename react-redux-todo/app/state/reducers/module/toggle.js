let prevIsToggle = false;
const toggle = (state = prevIsToggle, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_ADDING':
            return !state
        default:
            return state;
    }
}

export default toggle;