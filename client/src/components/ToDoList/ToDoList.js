import React from 'react';
import "./ToDoList.css";

class ToDoList extends React.Component {
  removeItem(e) {
    this.props.removeTodo(e);
  }

  render() {
    return (
      <div className="container">
        <ul className="todoList">
          {
            this.props.items.map((item, index) =>
              <li onClick={() => {this.removeItem(item)}} className={"todo"+index} key={index}>
              {item}
              <a className="todoLinks"> ✓</a>
            </li>)
          }
        </ul>
      </div>
    )
  }
};

export default ToDoList;