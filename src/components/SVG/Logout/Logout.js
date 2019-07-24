import logout from '../../../assets/logout.png';
import React from 'react';
import classes from './Logout.module.css';

const Logout = (props) => {
    return(
            <img className={classes.Logout} src={logout} alt="Logout" />
    );
};

export default Logout;
