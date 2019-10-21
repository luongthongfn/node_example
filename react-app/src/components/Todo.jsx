import React from 'react';
import TodoItem from './TodoItem';
function Todo() {
    return (
        <div>
            <div className="form">
                <input type="text" name="" id=""/>
                <button>add</button>
            </div>
            <ul className="list">
                <TodoItem/>
            </ul>
        </div>
    )
}
export default Todo;