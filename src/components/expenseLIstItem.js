import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { performRemoveExpense } from '../actions/expenses';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (


  <div className="expenselist-content">
    <div className="expenselist-content__left">
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <span className="expense-date"> {moment(createdAt).format('MMMM Do, YYYY')}</span>
      < button className="btn btn-list" onClick={() => {
        dispatch(performRemoveExpense({ id }));
      }}>Remove</button>
    </div>
    <div className="expenselist-content__right">
      <h3>{numeral(amount / 100).format('$0,0.00')}</h3>
    </div>



  </div >


);

export default connect()(ExpenseListItem);