import React from 'react';
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <div className="container">
      <ul className="todoList">
        {
          props.items.map((item, index) =>
            <li key={index}>
            {item}
            <a> [x]</a>
          </li>)
        }
      </ul>
    </div>
  )
};

export default ToDoList;