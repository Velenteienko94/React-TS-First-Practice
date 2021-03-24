import ToDoForm from "./To-do-form-component";

export type TToDoProps = {
  onAdd(title: string): void;
};

export default ToDoForm;
