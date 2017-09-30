import React from "react";
import "./ToDo.css";

const ToDo = props => (
	<form>
	<input id="todo" type="text" name="todo" placeholder="To Do List" />
	<button type="submit" name="submit" id="addToDo">+</button>
	</form>
	);

export default ToDo;