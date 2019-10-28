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

export function toggleIsCompleteAction(id){
    return {
        type: "TOGGLE_COMPLETE_TODO",
        id
    }
}

export default {
    addTodoAction,
    removeTodoAction,
    toggleIsCompleteAction
};