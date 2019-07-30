import React from 'react'
import classes from './NotItems.module.css'
import { ReactComponent as MovieLogo } from '../../assets/movie.svg'

const NotItems = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.TitlePrimary}>
        Your's Basket is Empty
      </div>
      <div className={classes.TitleSecondary}>
        Plese Put Something In It
      </div>
      <div className={classes.LogoContainer}>
        <MovieLogo />
      </div>
    </div>
  )
}

export default NotItems
