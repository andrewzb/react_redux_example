import magnifier from '../../../assets/magnifier.png';
import React from 'react';
import classes from './Magnifier.module.css';

const Magnifier = (props) => {
    return(
            <img className={classes.Magnifier} src={magnifier} alt="magnifier" />
    );
};

export default Magnifier;
