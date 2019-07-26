import React from 'react'
import classes from './Button.module.css'

const Button = props => (
  <a className={classes.Btn} onClick={props.click} href={'#'}> {props.title} </a>
)

export default Button
