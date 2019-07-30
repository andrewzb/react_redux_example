import React from 'react'
import classes from './Footer.module.css'
import * as config from '../../config'

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.CopyRight}> Created By GR In learnig Perpises &copy; 2019 </div>
      <div className={classes.GitHub}><a href={config.GIT_HUB}>GitHub</a></div>
    </footer>
  )
}

export default Footer
