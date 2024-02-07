import React, { useContext, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";

// const Login = (props) => {
// const [enteredEmail, setEnteredEmail] = useState("");
// const [emailIsValid, setEmailIsValid] = useState();

// const [enteredPassword, setEnteredPassword] = useState("");
// const [passwordIsValid, setPasswordIsValid] = useState();

// const [formIsValid, setFormIsValid] = useState(false);

// // // 1]
// // useEffect(() => {
// //   console.log("I am Running all the time where the Login Function render...");

// // });

// // // 2]
// // useEffect(() => {
// //   console.log("I am Running where the enteredEmail and enteredPassword changes...")
// //   setFormIsValid(
// //     enteredEmail.includes("@") && enteredPassword.trim().length > 6
// //   );
// // },[enteredEmail,enteredPassword]);

// // 3]
// useEffect(() => {
//   console.log(
//     "I am Running where the enteredEmail and enteredPassword changes..."
//   );

//   setTimeout(() => {
//     console.log("I am waiting 1 sec ");
//     setFormIsValid(
//       enteredEmail.includes("@") && enteredPassword.trim().length > 6
//     );
//   }, 1000);

//   return () => {
//     console.log(
//       "I am Clean Up Function before useEffect Runs and the end of the leaving login function.."
//     );
//   };
// }, [enteredEmail, enteredPassword]);

// const emailChangeHandler = (event) => {
//   setEnteredEmail(event.target.value);
// };

// const passwordChangeHandler = (event) => {
//   setEnteredPassword(event.target.value);
// };

// const validateEmailHandler = () => {
//   setEmailIsValid(enteredEmail.includes("@"));
// };

// const validatePasswordHandler = () => {
//   setPasswordIsValid(enteredPassword.trim().length > 6);
// };

// const submitHandler = (event) => {
//   event.preventDefault();
//   props.onLogin(enteredEmail, enteredPassword);
// };

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }

  return { value: "", isValid: false };
};

const Login = () => {
  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      emailState.value.includes("@") && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(
      emailState.value.includes("@") && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>

        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
