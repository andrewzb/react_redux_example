import React from 'react'
import classes from './LikeListItem.module.css'
import Icon from '../UserBar/IconUserBar/IconUserBar'
import { withRouter } from 'react-router-dom'


const LikeListItem = props => {
  const { click, Title, Poster, Id, history } = props
  return (
    <div className={classes.ItemContainer}>
      <div className={classes.PosterPrev} onClick={() => history.push(`/${Id}`)} >
        <img src={Poster} alt="Poster" />
      </div>
      <div className={classes.PrimaryTitle}>
        {Title}
      </div>
      <div onClick={click} className={classes.Trash}>
        <Icon type={'trash'} />
      </div>
    </div>
  )
}

export default withRouter(LikeListItem)
