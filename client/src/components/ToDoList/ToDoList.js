import React from 'react';
import "./ToDoList.css";

class ToDoList extends React.Component {
  removeItem(e) {
    this.props.removeTodo(e);
  }

  componentDidMount() {
    helpers.getTodos()
      .then((response) => {
        for (var i = response.data.length-1; i>=0; i--){
          this.state._id.push(response.data[i]._id);
          this.state.items.push(response.data[i].todo);
        }
        this.setState({items: this.state.items});
        this.setState({_id: this.state._id});
        console.log(this.state._id);
        console.log(this.state.items);
    });
  }

  render() {
    return (
      <div className="container">
        <ul className="todoList">
          {
            this.props.items.map((item, index) =>
              <li onClick={() => {this.removeItem(item)}} className={"todo todo"+index} key={"todoItem"+index}>
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