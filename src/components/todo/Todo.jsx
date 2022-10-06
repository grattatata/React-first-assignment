import React from "react";
import "./style.css";

function Todo({ todo }) {
  return (
    <div className="todo-container">
      <div>
        <h3 className="todo-title">{todo.title}</h3>
      </div>
    </div>
  );
}

export default Todo;
