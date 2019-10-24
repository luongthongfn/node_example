export function addTodoAction(text){
    return {
        type: "ADD_TODO",
        text
    }
}

export function removeTodoAction(index){
    return {
        type: "REMOVE_TODO",
        index
    }
}

export function toggleIsCompleteAction(index){
    return {
        type: "TOGGLE_COMPLETE_TODO",
        index
    }
}

export default {
    addTodoAction,
    removeTodoAction,
    toggleIsCompleteAction
};