import React from 'react'
import IconUserBar from './IconUserBar/IconUserBar'
import classes from './UserBar.module.css'

const UserBar = ({ bascketIsEmpty }) => {
  // **signup
  // **login
  // **logout
  // **heartfill
  // **heart
  const getBasket = boll => (boll ? <IconUserBar type="heart" /> : <IconUserBar type="heartfill" />)

  return (
    <div className={classes.Container}>
      {getBasket(bascketIsEmpty)}
    </div>
  )
}

export default UserBar
