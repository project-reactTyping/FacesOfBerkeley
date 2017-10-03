import React from 'react';
import "./ToDoList.css";

const ToDoList = (props) => {
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
};

export default ToDoList;