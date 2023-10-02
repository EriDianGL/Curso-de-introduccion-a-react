import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { InputAddTodo } from "./InputAddTodo";
import React from "react";
import "./App.css";
/* Array (objetos) */
const defaultTodos = [
  { text: "Vacuum the living room and bedrooms.", completed: true },
  { text: "Go for a 30-minute jog in the morning.", completed: false },
  { text: "Create a budget and itinerary for the trip.", completed: false },
  { text: "Set up an automatic payment for the phone bill.", completed: false },
  { text: "Enviar correo", completed: false },
];

function App() {
  return (
    <>
      {/* <React.Fragment> */}
      {/* App structure(lo primero que debe sder creado es la estructura de la applicacion ¿Que componentes necesitamos?) */}
      <div className="backgroundContainer">
        <div className="mainContainer">
          <div className="addTodoContainer">
            <h1 className="titles">What's up, Erika!</h1>
            <p className="bodyFont">
              Let's get started on your journey by creating a new task.
            </p>
            <InputAddTodo />
            <CreateTodoButton />
            <img
              class="taskIllustracion"
              src="https://img.freepik.com/free-vector/personal-goals-checklist-concept-illustration_114360-9881.jpg?w=2000&t=st=1695940539~exp=1695941139~hmac=6cd9ec9cc9795df7668e8a90698df3f8377e2bc210d4b6c7ee496df49182c4d3"
              alt="Tasks management"
            ></img>
          </div>
          <div className="todoListContainer">
            <h1 className="titles">Today’s Tasks</h1>
            <TodoCounter completed={16} total={25} />
            <TodoSearch />
            <TodoList>
              {/* Por cada objeto en el Array defaultTodos vamos a renderizar un
              componente TodoItem */
              /* Renderizamos un array apartir de otro array*/
              /*Funcion flecha es la version corto de una funcion "function(todo){return (<TodoItem/>)}" */}
              {defaultTodos.map((todo) => (
                /*Key es una propiedad unica que muestra losdistintos objetos en un array, text es una la propieda React necesita para renderizar las listas teniendo cada una un identificador distinto */
                <div className="todoContainer">
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                  />
                </div>
              ))}
            </TodoList>
          </div>
        </div>
      </div>
    </> /* </React.Fragment> */
  );
}

export default App;
