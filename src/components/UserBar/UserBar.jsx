import React from 'react'
import IconUserBar from './IconUserBar/IconUserBar'
import classes from './UserBar.module.css'
import { withRouter } from 'react-router-dom'

const UserBar = props => {
  const { bascketIsEmpty } = props
  // **signup
  // **login
  // **logout
  // **heartfill
  // **heart
  const getBasket = boll => (boll === 'true' ? <IconUserBar type="heart" /> : <IconUserBar type="heartfill" />)
  return (
    <div className={classes.Container} onClick={() => props.history.push('/likelist')} >
      {getBasket(bascketIsEmpty)}
    </div>
  )
}

export default withRouter(UserBar)
