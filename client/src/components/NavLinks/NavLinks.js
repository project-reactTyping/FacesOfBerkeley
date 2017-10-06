import React from "react";
import "./NavLinks.css";

const NavLinks = (props) => (
    <a className="links" href='/user'>{props.text}</a>
)

export default NavLinks;