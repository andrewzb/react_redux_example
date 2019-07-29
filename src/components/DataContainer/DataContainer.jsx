import React from 'react'
import classes from './DataContainer.module.css'

const DataContainer = props => (
  <React.Fragment>
    <div className={classes.Data} >Rated As : {props.data.MovieData.Rated}</div>
    <div className={classes.Data} >Runtime : {props.data.MovieData.Runtime}</div>
    <div className={classes.Data} >Year Of Realise : {props.data.MovieData.Released}</div>
    <div className={classes.Data} >Genre : {props.data.MovieData.Genre}</div>
    <div className={classes.Data} >Language : {props.data.MovieData.Language}</div>
    <div className={classes.Data} >Country : {props.data.MovieData.Country}</div>
    <div className={classes.Data} >Director : {props.data.MovieData.Director}</div>
    <div className={classes.Data} >Main Cast : {props.data.MovieData.Actors}</div>
    <div className={classes.Data} >Production : {props.data.MovieData.Production}</div>
    <div className={classes.Data} >BoxOffice : {props.data.MovieData.BoxOffice}</div>
    <div className={classes.Data} >Awards : {props.data.MovieData.Awards}</div>
  </React.Fragment>
)

export default DataContainer
