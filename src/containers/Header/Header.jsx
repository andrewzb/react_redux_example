import React from 'react'
import { connect } from 'react-redux'
import * as actionsCreater from '../../store/data/ActionCreaters'

import classes from './Header.module.css'
import { ReactComponent as Logo } from '../../assets/loggo.svg'
import SeachBar from '../../components/UI/SearchBar/SearchBar'
import UserBar from '../../components/UserBar/UserBar'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
    }
  };

  handleChange (event) {
    this.setState({ title: event.target.value })
  }

  handelSearch () {
    this.props.getMoviesByTitle({ title: this.state.title })
  }

  render () {
    return (
      <header className={classes.Header}>
        <div className={classes.Container}>
          <Logo />
          <SeachBar title={this.state.title} onTupe={e => this.handleChange(e)} onSearch={() => this.handelSearch()} />
          <UserBar bascketIsEmpty={(this.props.LikeList.length >= 1) ? 'false' : 'true'} />
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    LikeList: state.data.LikeList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoviesByTitle: data => { dispatch(actionsCreater.getMoviesFromSearchbarTitleStart(data)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
