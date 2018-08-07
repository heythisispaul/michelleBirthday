import React from 'react';
import '../App.css';
import lock from '../assets/lock-128.png';

const LoginWindow = (props) => {

    return (
        <div className="container w3-animate-opacity login">
            <div className="row">
                <div className="col">&nbsp;</div>
                <div id="passwordBox" className="col-6">
                    <div>
                        <img src={lock} id="lock" />
                    </div>
                    {/* <h1 className="headerStyle">Password Please</h1> */}
                    <input className="passwordBar" type='password'  value={props.passwordVal} onChange={props.handlePassword} onKeyDown={(e) => {e.keyCode == 13 ? props.handleSubmit() : null}}/>
                    <p className="submitButton" onClick={props.handleSubmit}>enter</p>
                </div>
                <div className="col">&nbsp;</div>
            </div>
        </div>
    );
}

export default LoginWindow;
