import React from "react";
import ToDoList from '../../components/ToDoList';
import "./ToDo.css";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value});
    console.log(event);
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return(
      <div className="container">
        <form className="Todo" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>[ + ]</button>
        </form>
        <ToDoList items={this.state.items} />
      </div>
    )
  }
}
export default ToDo;