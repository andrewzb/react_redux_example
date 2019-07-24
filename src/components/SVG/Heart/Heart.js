import heart from '../../../assets/heart.png';
import React from 'react';
import classes from './Heart.module.css';

const Logo = (props) => {
    return(
            <img className={classes.Heart} src={heart} alt="Logo" />
    );
};

export default Logo;
