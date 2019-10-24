function addTodoAction(text){
    return {
        type: "ADD_TODO",
        text
    }
}

function removeTodoAction(index){
    return {
        type: "REMOVE_TODO",
        index
    }
}

function toggleIsCompleteAction(){
    return {
        type: "TOGGLE_COMPLETE_TODO"
    }
}

export default {
    addTodoAction,
    removeTodoAction,
    toggleIsCompleteAction
};