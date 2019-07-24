import React from 'react';
import IconUserBar from './IconUserBar/IconUserBar';
import classes from './UserBar.module.css'

const UserBar = ({isLogin}) => {
    // **signin
    // **login
    // **logout
    // **heartfill
    // **heart


    return(
        <div className={classes.Container}>
            <IconUserBar
                type='signin'
            />
            <IconUserBar
                type='login'
            />
            <IconUserBar
                type='heart'
            />
        </div>
    )

}


export default UserBar;