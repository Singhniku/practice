import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) =>{
const SaveExpenseHandler = (EnteredExpense)=>{
    const ExpenseData={
        ...EnteredExpense,
        id: Math.random().toString()
    };
    props.onAddExpense(ExpenseData);
}
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={SaveExpenseHandler}/>
        </div>
    );
};
export default NewExpense; 