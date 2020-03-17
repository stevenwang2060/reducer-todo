import React from 'react';

const TodoList = props => {
    return (
    <div className="todo-list">
        <h2>To-Do List:</h2>
        {props.state.todos.map(item => {
                return (
                    <div onClick={() => {
                        props.dispatch({
                            type: "TOGGLE_COMPLETED",
                            payload: item.id
                        })
                    }}>
                    <p key={item.id}>{item.item}</p>
            
                    {
                    item.completed ? 
                    <p className="completedTaskConfirm" style={{color: "green"}}>COMPLETED!</p>
                    :
                    <p className="completedTaskConfirm" style={{color: "red"}}> Not Completed</p>
                    }
                    </div>
            )
        })
        }

        <button onClick={()=> {
            props.dispatch({
                type: "REMOVE_COMPLETED"
            })
        }}>
            Remove Completed
        </button>
    </div>
    )
}

export default TodoList;