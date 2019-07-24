import React from 'react';
import classes from './MovieItem.module.css';

const MovieItem = ({Title,Year,imdbID,Type,Poster}) => {


        return(
            <div className={classes.Container}>
                <div className={classes.Title}>
                    {Title}
                </div>
                <div className={classes.PosterContainer}>
                    <img className={classes.Poster} src={Poster} alt="Poster" />
                </div>
                <div>
                    <div className={classes.Info}>
                        Type -  {Type} 'Year of realise' - {Year}
                    </div>
                </div>
                   

            </div>





        );

};


export default MovieItem;