import React from 'react';
import '../App.css';

const LoginWindow = (props) => {

    return (
        <div className="container w3-animate-opacity login">
            <div className="row">
                <div className="col">&nbsp;</div>
                <div id="passwordBox" className="col-6">
                    <h1 className="headerStyle">Password Please</h1>
                    <input type='password' value={props.passwordVal} onChange={props.handlePassword} />
                    <p className="submitButton" onClick={props.handleSubmit}>enter</p>
                </div>
                <div className="col">&nbsp;</div>
            </div>
        </div>
    );
}

export default LoginWindow;
