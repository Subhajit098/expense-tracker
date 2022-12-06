import React,{ useState } from "react";
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import "./Expenses.css"
import ExpenseFilter from '../NewExpense/ExpenseFilter';
function Expenses(props) {


    const [filteredYear,setFilteredYear] = useState("2020");

    const filterChangeHandler=(selectedDate)=>
    {
        setFilteredYear(selectedDate);
        console.log(selectedDate);
    }

    return (
        <div>
            <Card className='expenses'>
            <ExpenseFilter onChangeYear={filteredYear} onChangeHandler={filterChangeHandler}/>
             

            {props.data.map(expense=>
            
                 <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} data={expense.date} />
                 )}
            </Card>
        </div>

    );
}

export default Expenses;