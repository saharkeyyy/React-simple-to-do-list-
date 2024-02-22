import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [inputText, SetinputText] = useState("");
  const [Todos, SetTodos] = useState([]);
  return (
    <div className="App">
      <h1> my to do list </h1>

      <Form
        Todos={Todos}
        inputText={inputText}
        SetTodos={SetTodos}
        SetinputText={SetinputText}
      />
      <TodoList SetTodos={SetTodos} Todos={Todos} />
    </div>
  );
}

export default App;
