import signin from '../../../assets/signin.png';
import React from 'react';
import classes from './Signin.module.css';

const Signin = (props) => {
    return(
            <img className={classes.Signin} src={signin} alt="Signin" />
    );
};

export default Signin;
