import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <p className="counterText">
      You've completed
      <span className="counter">{completed}</span> of
      <span className="counter"> {total}</span> tasks so far. <br /> Keep up the
      good work!
    </p>
  );
}
export { TodoCounter };
