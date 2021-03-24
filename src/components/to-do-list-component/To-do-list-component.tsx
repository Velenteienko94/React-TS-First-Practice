import React from "react";
import { TTodoListProps } from ".";

export const ToDoList: React.FC<TTodoListProps> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join("")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                onClick={() => onRemove(todo.id)}
                className="material-icons red-text"
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
