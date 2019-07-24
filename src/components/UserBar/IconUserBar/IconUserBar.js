import React from 'react';
import  classes from './IconUserBar.module.css'

import LogoutLogo from '../../SVG/Logout/Logout';
import LoginLogo from '../../SVG/Login/Login';
import HeartLogo from '../../SVG/Heart/Heart';
import HeartFillLogo from '../../SVG/HeartFill/HeartFill';
import SigninLogo from '../../SVG/Signin/Signin'






const IconUserBar = (props) => {
    const type = props.type;
    let Output; 
    switch(type) {
        case 'signin': 
          Output = SigninLogo;
          break;
        case 'login': 
            Output = LoginLogo
            break;
        case 'logout': 
            Output = LogoutLogo
            break;
        case 'heartfill': 
            Output = HeartFillLogo
            break;
        case 'heart': 
            Output = HeartLogo
            break;
        default:
          Output = null;
          break;  
      }

    return(
        <div className={classes.Container}>
            <Output/>

        </div>



    );

}



export default IconUserBar;