import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoApp extends Component {
    state = {
        todoText: '',
        todo: [
            {text: 'a1'},
            {text: 'a2'},
            {text: 'a3'}
        ]
    }

    addTodo(){
        this.setState({ todo: [...this.state.todo, {text: this.state.todoText}] });
        this.setState({ todoText: ''});
    }
    updateText(e){
        this.setState({ todoText: e.target.value});
    }
    delete(index){
        this.state.todo.splice(index, 1)
        this.setState({ todo: this.state.todo });
    }
    render() { 
        return ( 
            <div>
                <div className="form">
                    <input onChange={this.updateText.bind(this)} type="text" name="" id="" value={this.state.todoText}/>
                    <button onClick={this.addTodo.bind(this)}>add</button>
                </div>
                <ol className="list" data={this.state}>
                    {this.state.todo.map( (item, index) => (
                        <TodoItem key={index} text={item.text} index={index} delete={this.delete.bind(this)}/>
                    ))}
                </ol>
            </div>
        );
    }
}
 
export default TodoApp;