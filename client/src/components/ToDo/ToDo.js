import React from "react";
import ToDoList from '../../components/ToDoList';
import helpers from '../../utils/helpers';
import "./ToDo.css";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  componentDidMount() {
    helpers.getTodos()
      .then(function(response) {
        console.log(response.data[0].todo);
        console.log(response.data.length);
        let todo = [];
        // for (var i = response.data.length-1; i>=0; i--){
        //   this.state.items.push(response.data[i].todo);
        // }
        console.log(this.state.items);
        // this.setState({items: this.state.items});
        // console.log(this.state.items);
    })
  }
  onChange = (event) => {
    this.setState({ term: event.target.value});
  }
  removeTodo = (item) => {
    this.setState({ items: this.state.items.filter(el => el !== item)});
    // helpers.deleteTodo(item)
    //   .then((res) => {
    //     this.setState({items: res.data});
    //   });
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
    let item = this.state.term;
    console.log(item);
    this.state.items.unshift(item);
    this.setState({items: this.state.items});
    helpers.saveTodo(item)
      .then(function(response){
        console.log(response);
      });
  }

  render() {
    return(
      <div className="todoContainer">
        <form className="Todo" onSubmit={this.onSubmit}>
          <input placeholder=' add a task...' className="todoForm" value={this.state.term} onChange={this.onChange} />
          <button className="addTodo">Add Task</button>
        </form>
        <ToDoList items={this.state.items} removeTodo={this.removeTodo}/>
      </div>
    )
  }
}
export default ToDo;