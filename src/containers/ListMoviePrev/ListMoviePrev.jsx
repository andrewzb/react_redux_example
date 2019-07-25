import React from 'react'
import { connect } from 'react-redux'
import * as actionsCreater from '../../store/data/ActionCreaters'

import classes from './ListMoviePrev.module.css'

import MovieItem from '../../components/MovieItem/MovieItem'
import Spinner from '../../components/Spinner/Spinner'

import Btn from '../../components/UI/Button/Button'
class ListMoviePrev extends React.Component {
  NextHandler (e) {
    localStorage.removeItem('page')
    localStorage.setItem('page', this.props.CurrentPage)
    this.props.getMoviesNextStart()
  }

  PrevHandler (e) {
    localStorage.removeItem('page')
    localStorage.setItem('page', this.props.CurrentPage)
    this.props.getMoviesPrevStart()
  }

  componentDidMount () {
    this.props.getMoviesStart()
  }

  getMoviesOnPage () {
    return (this.props.MoviesOnPage.map(el => (
      <MovieItem
        Title={el.Title}
        Year={el.Year}
        imdbID={el.imdbID}
        Type={el.Type}
        Poster={el.Poster}
        key={el.imdbID} />
    )))
  }
  getMoviesJSX () {
    return (
      <React.Fragment>
        <div className={classes.MovieContainer}>
          {this.getMoviesOnPage()}
        </div>
        <div className={classes.buttonsContainer}>
          <div className={classes.buttonContainer}><Btn click={e => this.PrevHandler(e)} title={'prev'} isActive={false} /></div>
          <div className={classes.buttonContainer}><Btn title={this.props.CurrentPage} /></div>
          <div className={classes.buttonContainer}><Btn click={e => this.NextHandler(e)} title={'next'} /></div>
        </div>
      </React.Fragment>

    )
  }

  render () {
    return (
      <div className={classes.Container}>
        {this.props.Spinner ? <Spinner /> : this.getMoviesJSX()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    CurrentPage: state.data.CurrentPage,
    MoviesOnPage: state.data.MoviesOnPage,
    ResCounter: state.data.ResCounter,
    Spinner: state.data.Spinner,
    Err: state.data.Err,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoviesStart: () => dispatch(actionsCreater.getMoviesOnLoadStart()),
    getMoviesNextStart: () => dispatch(actionsCreater.getMoviesFromSearchbarTitleNextPageStart()),
    getMoviesPrevStart: () => dispatch(actionsCreater.getMoviesFromSearchbarTitlePrevPageStart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePrev)
