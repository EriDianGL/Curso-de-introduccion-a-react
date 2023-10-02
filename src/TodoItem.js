import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItemsLi">
      <label className="TodoText">
        {props.text}
        <input className="CheckInput" type="checkbox" />
        <span class="checkmark"></span>
      </label>
      {/* <div> X </div> */}
    </li>
  );
}

export { TodoItem };
