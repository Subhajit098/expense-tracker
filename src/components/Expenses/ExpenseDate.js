import "./ExpenseDate.css";

function ExpenseDate(props)
{
    const month=props.date?.toLocaleString("en-US",{month:"long"})|| "January";
    const day=props.date?.toLocaleString("en-US",{day:"2-digit"})||"5";
    const year=props.date?.getFullYear()||"2020";
    console.log(month,day,year);
    return (
        <div className="expense-date"> 
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;