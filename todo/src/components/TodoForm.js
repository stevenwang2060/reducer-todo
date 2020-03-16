import React, { useState } from 'react';

const TodoForm = ({dispatch}) => {

    const [newTodoText, setNewTodoText] = useState('');
    

    const handleChanges = e => {
    setNewTodoText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setNewTodoText('')
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
            className="todo-input"
            type="text"
            name="newTodoText"
            placeholder="What's Your To Do?"
            value={newTodoText}
            onChange={handleChanges}
            />
        <button onClick={() => { 
            dispatch({
                type: 'ADD_TODO',
                payload: newTodoText 
            })
            }}>
            Add New Todo
        </button>
        </form>
    </div>
    )
}

export default TodoForm;