import React from 'react'
import classes from './IconUserBar.module.css'

import { ReactComponent as LogoutLogo } from '../../../assets/logout.svg'
import { ReactComponent as LoginLogo } from '../../../assets/login.svg'
import { ReactComponent as SignupLogo } from '../../../assets/signup.svg'
import { ReactComponent as HeartLogo } from '../../../assets/heart.svg'
import { ReactComponent as HeartFillLogo } from '../../../assets/heartfill.svg'
import { ReactComponent as TrashLogo } from '../../../assets/trash.svg'

const IconUserBar = props => {
  const { type } = props
  let Output
  switch (type) {
    case 'signup':
      Output = <SignupLogo />
      break
    case 'login':
      Output = <LoginLogo />
      break
    case 'logout':
      Output = <LogoutLogo />
      break
    case 'heartfill':
      Output = <HeartFillLogo />
      break
    case 'heart':
      Output = <HeartLogo />
      break
    case 'trash':
      Output = <TrashLogo />
      break
    default:
      Output = null
      break
  }

  return (
    <div className={classes.Container}>
      {Output}

    </div>

  )
}

export default IconUserBar
