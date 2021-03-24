import React, { useState } from "react";
import NavBar from "./components/nav-bar-component";
import ToDoForm from "./components/to-do-form-component";
import ToDoList from "./components/to-do-list-component";
import { TTodo } from "./types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: TTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos])
    setTodos((prev) => [newTodo, ...prev]);
  };
  return (
    <>
      <NavBar />
      <div>
        <ToDoForm onAdd={addHandler} />
        <ToDoList todos={todos} />
      </div>
    </>
  );
};
export default App;
