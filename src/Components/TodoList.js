import React from "react";
import Todo from "../Components/Todo";
function TodoList({ Todos, SetTodos }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {Todos.map((todo) => (
            <Todo
              Todos={Todos}
              SetTodos={SetTodos}
              todo={todo}
              key={todo.id}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
