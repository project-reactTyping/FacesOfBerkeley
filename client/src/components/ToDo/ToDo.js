import React from "react";
import AddToDoBtn from "../AddToDoBtn";
import "./ToDo.css";

const ToDo = props => (
	<form>
	<input id="todo" type="text" name="todo" placeholder="Add Task..." />
	<AddToDoBtn />
	</form>
	);

export default ToDo;