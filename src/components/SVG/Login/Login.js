import login from '../../../assets/login.png';
import React from 'react';
import classes from './Login.module.css';

const Login = (props) => {
    return(
            <img className={classes.Login} src={login} alt="Login" />
    );
};

export default Login;
