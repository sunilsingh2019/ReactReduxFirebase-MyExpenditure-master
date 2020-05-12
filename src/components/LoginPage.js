import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../actions/authentication';
import bgVideo from './../video/bg_video.mp4';
export const LoginPage = ({ startLogin }) => (

    <div className="login-page">
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={bgVideo} type="video/mp4"></source>
            </video>
        </div>
        <div className="login-page__box">
            <h1 className="heading-primary">My Expenditure</h1>
            <p className="border-after">Keep record your Expenditure</p>
            <button onClick={startLogin} className="btn btn-login">Login</button>
        </div>

    </div>

);

const mapDiapatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
}
);
export default connect(undefined, mapDiapatchToProps)(LoginPage);