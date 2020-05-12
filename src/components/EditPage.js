import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { performEditExpense, performRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.performEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.performRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="edit-expens ">
                <div className="page-header padding-tb-m">
                    <div className="container">
                        <h1> Edit Expenses</h1>
                    </div>
                </div>
                <div className="container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button onClick={this.onRemove} className="btn btn-add btn-grid btn-del">Remove</button>
                </div >
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    performEditExpense: (id, expense) => dispatch(performEditExpense(id, expense)),
    performRemoveExpense: (data) => dispatch(performRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
