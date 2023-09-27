import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import React from 'react';
import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* \\App structure(lo primero que debe sder creado es la estructura de la applicacion ¿Que componentes necesitamos?) */}
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
