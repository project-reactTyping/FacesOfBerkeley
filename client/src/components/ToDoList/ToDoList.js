import React from 'react';
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <div className="container">
      <ul className="todoList">
        {
          props.items.map((item, index) => <div> <li key={index}>{item} <input type="button" className="delete" value="X"/> </li></div>)
        }
      </ul>
    </div>
  )
};

export default ToDoList;