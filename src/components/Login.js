import React from 'react';

const Login = (props) => {
    return (
        <nav className="login">
            <h2>Inventory Login</h2>
            <p>Sign in to manage your's store inventory</p>
            <button className="github" onClick={() => props.authenticate('Github')}>Log in with Github</button>
            <button className="twitter" onClick={() => props.authenticate('Twitter')}>Log in with Twitter</button>
            <button className="facebook" onClick={() => props.authenticate('Facebook')}>Log in with Facebook</button>
        </nav>
    );
};

export default Login;
