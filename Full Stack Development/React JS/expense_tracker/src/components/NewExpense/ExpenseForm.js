import React, { useState } from "react";

import "./ExpenseForm.css";

// 1]
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSavedExpenseData(expenseData);
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// // 2]
// // Note: Note Recommended beacuse in a Large data it's Not Give Desire Output
// const ExpenseForm = () => {

//   const [enteredInput, setEnteredInput] = useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:'',
//   });

//   const titleChangeHandler = (event) => {
//     setEnteredInput({
//       ...enteredInput,
//       enteredTitle: event.target.value,
//     });
//   }

//   const amountChangeHandler = (event) => {
//     setEnteredInput({
//       ...enteredInput,
//       enteredAmount: event.target.value,
//     });  }

//   const dateChangeHandler = (event) => {
//     setEnteredInput({
//       ...enteredInput,
//       enteredDate: event.target.value,
//     });
//   }

//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log(enteredInput);

//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChangeHandler}/>
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type="number" min='1' step='1' onChange={amountChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
//         </div>
//       </div>
//       <div className="new-expense__actions" >
//         <button type="submit" onClick = {submitHandler} > Add Expense</button>
//       </div>
//     </form>
//   );
// };
// export default ExpenseForm;

// // 3]
// const ExpenseForm = () => {
//   const [enteredInput, setEnteredInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

//   const titleChangeHandler = (event) => {
//     setEnteredInput((prevSate) => {
//       return {
//         ...prevSate,
//         enteredTitle: event.target.value,
//       };
//     });
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredInput((prevSate) => {
//       return {
//         ...prevSate,
//         enteredAmount: event.target.value,
//       };
//     });
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredInput((prevSate) => {
//       return {
//         ...prevSate,
//         enteredDate: event.target.value,
//       };
//     });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log(enteredInput);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="1"
//             step="1"
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit" onClick={submitHandler}>
//           Add Expense
//         </button>
//       </div>
//     </form>
//   );
// };
// export default ExpenseForm;

// // 4]
// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

//   const inputChangeHandler = (identifier, value) => {
//     if (identifier === "title") {
//       setEnteredTitle(value);
//     } else if (identifier === "amount") {
//       setEnteredAmount(value);
//     } else if (identifier === "date") {
//       setEnteredDate(value);
//     }
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log(enteredTitle);
//     console.log(enteredAmount);
//     console.log(enteredDate);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input
//             type="text"
//             onChange={(event) => {
//               inputChangeHandler("title", event.target.value);
//             }}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="1"
//             step="1"
//             onChange={(event) => {
//               inputChangeHandler("amount", event.target.value);
//             }}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             onChange={(event) => {
//               inputChangeHandler("date", event.target.value);
//             }}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit" onClick={submitHandler}>
//           Add Expense
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;
