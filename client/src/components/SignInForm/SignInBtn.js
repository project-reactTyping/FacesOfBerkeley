import React from "react";

export const SignInBtn = props =>
  <button {...props} className="btn btn-success">
    {props.children}
  </button>;
