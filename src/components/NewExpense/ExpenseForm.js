import React , { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm=(props)=>
{
    const [enteredTitle,setUserInput] = useState("");
    const [enteredAmount,setUserAmount]=useState("");
    const [enteredDate,setEnteredDate]=useState("");

    // Or we can do another thing as all the states are doing the same thing i.e, storing the current value and updating it.

    // const [userInput,setUserInput]=useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:""
    // })

    const titleChangeHandler=(event)=>
    {
        setUserInput(event.target.value);
               
    };
    const amountChangeHandler=(event)=>
    { 
        setUserAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>
    {
        setEnteredDate(event.target.value);
    }

    const submitHandler=(event)=>
    {
        // As the page reloads after submitting the form, we restricted this default behavior and it wont send any post request to the development server.So we can handle the it with javascript
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            data:new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setUserInput("");
        setUserAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-response__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;