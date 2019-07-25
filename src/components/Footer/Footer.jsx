import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.CopyRight}> Created By GR In learnig Perpises &copy; 2019 </div>
      <div className={classes.GitHub}><a href="http://github.com">GitHub</a></div>
    </footer>
  )
}

export default Footer
