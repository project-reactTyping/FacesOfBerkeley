import React from 'react';
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <div>
      <ul>
        {
          props.items.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </div>
  )
};

export default ToDoList;