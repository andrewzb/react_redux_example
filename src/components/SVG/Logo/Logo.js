import logo from '../../../assets/logo.png';
import React from 'react';
import classes from './Logo.module.css';

const Logo = (props) => {
    return(
        <div className={classes.Container}>
            <img className={classes.Logo} src={logo} alt="Logo" />
        </div>
    );
};

export default Logo;
