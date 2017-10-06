import React from "react";
import "./PostForm.css";
import PostBtn from "../../components/PostBtn";
import axios from 'axios';

const PostForm = ({addForm}) => {
	let input;

	return (
		<div>
			<input ref= {node=>{
				input = node;
			}} />
			<button onClick={()=>{
				addTodo(input.value);
				input.value = '';
			}}> +
			</button>
	);
};
export default PostForm;

