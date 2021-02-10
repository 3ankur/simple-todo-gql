import React from 'react';
import './app.scss';
import AddNewTodo from './todo-button';
import TodoComponent from './todo-component';

function App() {
  return (
    <div className="App">
      <AddNewTodo />
     <TodoComponent/>
    </div>
  );
}

export default App;
