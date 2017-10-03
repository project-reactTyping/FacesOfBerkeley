import React from "react";
import "./NavBar.css";

const NavBar = (props) => (
    <a className="links" href={`/user/${props.text}`}>{props.text}</a>
)

export default NavBar;

