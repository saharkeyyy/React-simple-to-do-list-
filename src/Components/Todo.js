import React, { useState } from "react";

function Todo({ text, SetTodos, Todos, todo }) {
  const [tick, setTick] = useState(false);
  function handleDelete(e) {
    e.preventDefault();
    console.log(todo);
    console.log(Todos);
    SetTodos(Todos.filter((el) => el.id !== todo.id));
  }
  return (
    <div className="todo">
      <li className={tick ? "tick" : ""}>{text}</li>
      <button className="check-btn" onClick={() => setTick((tick) => !tick)}>
        ✔
      </button>
      <button className="trash-btn" onClick={(e) => handleDelete(e)}>
        ✂
      </button>
    </div>
  );
}

export default Todo;
