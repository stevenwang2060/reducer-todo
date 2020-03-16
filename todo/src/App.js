import React, { useReducer } from 'react';
import './App.css';

//components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

//reducers
import { initialState, todoReducer } from './reducers/reducer.js';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log('use reducer state:', state)

  return (
    <div className="App">
        <h1>Reducer To-Do</h1>
          <div className="App-Body">
            <div className="form">
            <TodoForm 
              dispatch={dispatch}
            />
            </div>
        
            <div>
            <TodoList 
              state={state} 
              dispatch={dispatch}
            />
            </div>
          </div>
    </div>
  );
}

export default App;