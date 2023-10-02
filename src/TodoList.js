function TodoList({ children }) {
  /*function TodoList (props){return(<ul>props.children</ul>)} */
  return <ul className="TodoListUl">{children}</ul>;
}
export { TodoList };
