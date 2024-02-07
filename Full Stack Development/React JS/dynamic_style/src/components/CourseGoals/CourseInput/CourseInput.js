import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.inValidInput ? 'red' : 'black')};

  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.inValidInput?  'red': '#ccc')};
    background: ${(props) => (props.inValidInput ? '#ffd7d7' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [inValid, setInValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setInValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setInValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    // // 1] Setting Dynamic Inline Css
    // <form onSubmit={formSubmitHandler}>
    //   <div className="form-control">
    //     <label style={{ color: !inValid ? "red" : "black" }}>Course Goal</label>
    //     <input
    //       style={{
    //         borderColor: !inValid ? "red" : "black",
    //         backgroundColor: !inValid ? "salmon" : "transparent",
    //       }}
    //       type="text"
    //       onChange={goalInputChangeHandler}
    //     />
    //   </div>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    // // 2] Setting Css Classes Dynamically
    // <form onSubmit={formSubmitHandler}>
    //   <div className={`form-control ${!inValid ? "inValid" : ""}`}>
    //     <label>Course Goal</label>
    //     <input type="text" onChange={goalInputChangeHandler} />
    //   </div>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    // 3] Using Styled Components
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={`form-control ${!inValid ? "inValid" : ""}`}> */}
      <FormControl $inValidInput= {!inValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>


  );
};

export default CourseInput;
