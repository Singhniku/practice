import React, {useState} from 'react';
import Card from './Card';
import './ExpenseFilter.css';

const ExpenseFilter = () => {
    return (
        <div className='expenses-filter'>
            
            <div className='expenses-filter__control'>
            <label className='expenses-filter label'> Year    </label>
            <select className='expenses-filter select'>
                <option> 2018</option>
                <option> 2019</option>
                <option> 2020</option>
                <option> 2021</option>
            </select>
            </div>
        </div>
    );
}
export default ExpenseFilter;