import React from 'react';
import './../style/style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from './../actions/authentication';
export const HeaderPage = ({ startLogOut }) => {
    return (


        <header className="header">
            <div className="container header-content">
                <Link to="/dashboard" activeClassName="is-active" >
                    <h1 className="btn">My Expenditure</h1>
                </Link>
                <button onClick={startLogOut} className=" btn btn-logout">Logout</button>
            </div>
        </header>

    );
};
const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
})

export default connect(undefined, mapDispatchToProps)(HeaderPage);