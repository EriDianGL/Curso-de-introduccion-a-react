function TodoList({children}) {/*function TodoList (props){return(<ul>props.children</ul>)} */
    return (
      <ul> 
        {children}
      </ul>
    );
  }
  export { TodoList };