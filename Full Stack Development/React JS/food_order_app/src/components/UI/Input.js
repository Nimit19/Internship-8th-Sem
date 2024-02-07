import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef(({ label, inputElement }, ref) => {
  return (
    <div className={classes.input}>
      <label> {label}</label>
      <input ref={ref} {...inputElement} />
    </div>
  );
});

export default Input;
