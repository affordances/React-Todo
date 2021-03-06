import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div onClick={() => props.toggleCompleted(props.todo.id)}
         className={props.todo.completed ? "completed" : "uncompleted"}
    >
      {props.number}. {props.todo.task}
    </div>
  );
};

export default Todo;
