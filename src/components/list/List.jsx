import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {
  return (
    <div className="list-container">
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return <Todo todo={todo} key={todo.id} setTodos={setTodos} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
