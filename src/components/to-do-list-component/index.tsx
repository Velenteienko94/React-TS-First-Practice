import { TTodo } from "../../types";
import ToDoList from "./To-do-list-component";

export type TTodoListProps = {
  todos: TTodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

export default ToDoList;
