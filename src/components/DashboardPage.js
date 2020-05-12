import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseSummary from './ExpensesSummary';
const DashboardPage = () => {
    return (

        <div>
            <ExpenseSummary />
            <ExpenseListFilter />
            <ExpenseList />
        </div>
    );
};

export default DashboardPage;