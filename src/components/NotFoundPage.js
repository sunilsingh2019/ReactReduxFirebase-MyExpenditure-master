import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    return (

        <div className="container text-center padding-tb-m">

            <p>404! page not found <span style={{ fontWeight: "bold" }}> <Link to="/"> go to home</Link ></span></p>
        </div>
    );
};

export default NotFoundPage;