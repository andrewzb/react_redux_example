import React from 'react'
import classes from './MoviePage.module.css'
import { connect } from 'react-redux'
import * as actionsCreater from '../../store/data/ActionCreaters'
import Btn from '../../components/UI/Button/Button'
import DataContainer from '../../components/DataContainer/DataContainer'

class MoviePage extends React.Component {
  componentDidMount () {
    const str = this.props.location.pathname
    const id = str.substr(1)
    this.props.getMovieOnLoadStart({ Id: id })
  }

  toggleLike () {
    const str = this.props.location.pathname
    const id = str.substr(1)
    const data = {
      Id: this.props.MovieData.imdbID,
      Title: this.props.MovieData.Title,
      Poster: this.props.MovieData.Poster,
    }
    this.props.toggleLikeList(data)
  }

  getMovieMarckup () {
    if (this.props.MovieData === null) {
      return (<div>Error</div>)
    }
    return (
      <div className={classes.Main}>
        <div className={classes.Container}>
          <div className={classes.TitleAndBtnContainer}>
            <div className={classes.Primary_title}>{this.props.MovieData.Title}</div>
          </div>
          <div className={classes.PosterAndDataContainer}>
            <div className={classes.PosterContainer}><img src={this.props.MovieData.Poster} alt="Poster" /></div>
            <div className={classes.DataContainer}>
              <DataContainer data={this.props} />
              <div className={classes.LinkContainer}>
                <Btn
                  type={'link'}
                  title={'Site'}
                  link={this.props.MovieData.Website} />
              </div>
            </div>
          </div>
          <div className={classes.LikeAndGoBackBtnContainer}>
            <Btn
              type={'like'}
              click={() => this.toggleLike()}
              title={'Like'} />
            <Btn
              type={'button'}
              title={'GoBack'}
              click={() => this.props.history.push('/')} />
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      this.getMovieMarckup()
    )
  }
}

const mapStateToProps = state => {
  return {
    MovieData: state.data.MovieData,
    LikeList: state.data.LikeList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovieOnLoadStart: data => dispatch(actionsCreater.getMoviesByIdStart(data)),
    toggleLikeList: data => dispatch(actionsCreater.toggleMovieInLocalstorgeStart(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)
