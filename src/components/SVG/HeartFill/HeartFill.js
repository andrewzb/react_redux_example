import heartFill from '../../../assets/heart_fill.png';
import React from 'react';
import classes from './HeartFill.module.css';

const Logo = (props) => {
    return(
            <img className={classes.Heart} src={heartFill} alt="Logo" />
    );
};

export default Logo;
