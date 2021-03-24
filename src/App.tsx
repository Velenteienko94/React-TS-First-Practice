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

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    const todoIndex = todos.findIndex((toDo) => toDo.id === id);
    const nextTodos = [...todos];
    nextTodos[todoIndex].completed = !nextTodos[todoIndex].completed;

    setTodos(nextTodos);
  };

  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((toDo) => toDo.id !== id));
  };

  return (
    <>
      <NavBar />
      <div>
        <ToDoForm onAdd={addHandler} />
        <ToDoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  );
};
export default App;
