import logo from "./platzi.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* \\App structure(lo primero que debe sder creado es la estructura de la applicacion ¿Que componentes necesitamos?) */}
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span> v </span>
      <p>Llorar con la Llorona</p>
      <span> X </span>
    </li>
  );
}

export default App;
