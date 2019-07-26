import React from 'react'
import classes from './SearchBar.module.css'
import { ReactComponent as Magnifier } from '../../../assets/magnifier.svg'
const SearchBar = props => {
  return (
    <div className={classes.SearchBarContainer}>
      <input className={classes.SearchBar} value={props.title} type="text" placeholder="Search.." onChange={props.onTupe} /> <div onClick={props.onSearch} className={classes.MagnifierBtn}><Magnifier /></div>
    </div>
  )
}

export default SearchBar
