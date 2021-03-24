import React, { useState } from "react";
import { TToDoProps } from ".";

export const ToDoForm: React.FC<TToDoProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onAdd(title);
    setTitle("");
  };

  return (
    <div className="input-field mt2">
      <label htmlFor="title" className="active ">
        enter the todo
      </label>
      <input onChange={changeHandler} value={title} type="text" id="title" />
      <button
        onClick={clickHandler}
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

export default ToDoForm;
