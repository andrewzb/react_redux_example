import React from 'react'
import classes from './Button.module.css'

// **like
// **link
// **button

const Button = props => {
  const type = props.type || 'button'
  const link = props.link || '#'
  const action = props.click || null
  const title = props.title || 'clicked me'
  const isActive = props.isActive || 'active'

  const activeClasses = []
  activeClasses.push(classes[type])
  if (isActive === 'disable') {
    activeClasses.push(classes.disable)
  }
  return (
    <a className={activeClasses.join(' ')} onClick={action} href={link}> {title} </a>
  )
}

export default Button
