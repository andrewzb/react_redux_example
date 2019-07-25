import Input from '../UI/Input/Input'
import React from 'react'
import classes from './SearchParamsItem.module.css'

const SearchParamsItem = ({ placeholder }) => {
  return (
    <div className={classes.Container}>
      <Input placeholder={placeholder} />
    </div>
  )
}

export default SearchParamsItem
