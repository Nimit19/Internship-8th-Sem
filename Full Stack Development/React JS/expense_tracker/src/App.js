import React, { useState } from "react";

import "./App.css";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Alu Puri",
    amount: 30,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Udemy Course",
    amount: 499,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Fuel",
    amount: 310,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Splendor",
    amount: 85000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
 
  const [ expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    setExpenses((prevState)=>{
      return [ expense, ...prevState];
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
