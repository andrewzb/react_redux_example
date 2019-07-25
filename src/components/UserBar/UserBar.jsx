import React from 'react'
import IconUserBar from './IconUserBar/IconUserBar'
import classes from './UserBar.module.css'

const UserBar = ({ isLogin }) => {
  // **signup
  // **login
  // **logout
  // **heartfill
  // **heart

  return (
    <div className={classes.Container}>
      <IconUserBar
        type="signup" />
      <IconUserBar
        type="login" />
      <IconUserBar
        type="heart" />
    </div>
  )
}

export default UserBar
