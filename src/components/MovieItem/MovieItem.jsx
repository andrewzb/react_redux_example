import React from 'react'
import classes from './MovieItem.module.css'

const MovieItem = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Title}>
        {Title}
      </div>
      <div className={classes.PosterContainer}>
        <img className={classes.Poster} src={Poster === 'N/A' ? 'http://sinema.yedincigemi.com/thumb/tt2194870.jpg' : Poster} alt="Poster" />
      </div>

    </div>

  )
}

export default MovieItem
