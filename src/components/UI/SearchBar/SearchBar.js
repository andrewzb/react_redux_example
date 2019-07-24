import React from 'react';
import classes from './SearchBar.module.css'
import Magnifier from '../../SVG/Magnifier/Magnifier';
const SearchBar = (props) => {

    return (
        <div className={classes.SearchBarContainer}>
        <input className={classes.SearchBar} type="text" placeholder="Search.." /> <div className={classes.MagnifierBtn}><Magnifier/></div>
        </div>
    );


};


export default SearchBar;