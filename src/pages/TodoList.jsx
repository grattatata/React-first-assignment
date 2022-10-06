import React, { useState } from "react";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "과제 끝내기!",
      isDone: false,
    },
  ]);

  return (
    <Layout>
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
