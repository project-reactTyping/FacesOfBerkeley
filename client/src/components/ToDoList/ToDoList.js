import React from 'react';
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <div className="container">
      <ul>
        {
          props.items.map((item, index) => <li key={index}>
            {item}
            <a href='#'> [x]</a>
          </li>)
        }
      </ul>
    </div>
  )
};

export default ToDoList;