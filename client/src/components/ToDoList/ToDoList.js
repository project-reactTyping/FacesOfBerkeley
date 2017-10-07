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
            this.props.items.map((item) =>
              <li onClick={() => {this.removeItem(item)}} key={item}>
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