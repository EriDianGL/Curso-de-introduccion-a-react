import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";
import "./App.css";
/* Array (objetos) */
const defaultTodos = [
  { text: "cortar la cebolla", completed: true },
  { text: "Tomar el curso de introduccion a React.JS", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Comprar leche", completed: false },
  { text: "Enviar correo", completed: false },
];

function App() {
  return (
    <React.Fragment>
      {/* <React.Fragment> */}
      {/* App structure(lo primero que debe sder creado es la estructura de la applicacion ¿Que componentes necesitamos?) */}
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {/* Por cada objeto en el Array defaultTodos vamos a renderizar un
        componente TodoItem */
        /* Renderizamos un array apartir de otro array*/
        /*Funcion flecha es la version corto de una funcion "function(todo){return (<TodoItem/>)}" */}
        {defaultTodos.map((todo) => (
          /*Key es una propiedad unica que muestra losdistintos objetos en un array, text es una la propieda React necesita para renderizar las listas teniendo cada una un identificador distinto */
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
    /* </React.Fragment> */
  );
}

export default App;
