import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="expense-add">

                <div className="expense-add__header page-header padding-tb-m">
                    <div className="container">
                        <h1>Add Expense</h1>
                    </div>
                </div>
                <div className="expense-add__content">
                    <div className="container">
                        <ExpenseForm
                            onSubmit={this.onSubmit}
                        />
                    </div>
                </div>
            </div >

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);


