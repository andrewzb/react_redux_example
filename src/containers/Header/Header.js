import React from "react";
import classes from './Header.module.css';
import Logo from '../../components/SVG/Logo/Logo';
import SeachBar from '../../components/UI/SearchBar/SearchBar';
import UserBar from '../../components/UserBar/UserBar';


class Header extends React.Component {
    state = {
        isLogin: false
    }



    render() {

        return(
            <header className={classes.Header}>
                <div className={classes.Container}>
                <Logo/>
                <SeachBar/>
                <UserBar isLogin={this.state.isLogin} />
                </div>
        
            </header>
        );
    }








}



export default Header;