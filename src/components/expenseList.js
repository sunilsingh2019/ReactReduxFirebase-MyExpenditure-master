import React from 'react';
import { connect } from 'react-redux';
//import ExpenseListItem from './expenseListItem';
import ExpenseListItem from './expenseLIstItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="expenselist">
        <div className="container">
            <div className="expenselist-heading">
                <div className="expenselist-heading__title">
                    Expenses title
                </div>
                <div className="expenselist-heading__amount">
                    Amount
                </div>
            </div>
            {
                props.expenses.length === 0 ? (
                    <p>No expenses</p>
                ) : (
                        props.expenses.map((expense) => {
                            return <ExpenseListItem key={expense.id} {...expense} />;
                        })
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
