import React from 'react'
import { connect } from 'react-redux'
import * as actionsCreater from '../../store/data/ActionCreaters'

import classes from './Header.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import SeachBar from '../../components/UI/SearchBar/SearchBar'
import UserBar from '../../components/UserBar/UserBar'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogin: false,
      title: '',
    }
  };

  handleChange (event) {
    this.setState({ title: event.target.value })
  }
  handelSearch () {
    localStorage.setItem('title', this.state.title)
    this.props.getMoviesByTitle(this.state.title)
    this.setState({ title: '' })
  }
  render () {
    return (
      <header className={classes.Header}>
        <div className={classes.Container}>
          <Logo />
          <SeachBar title={this.state.title} onTupe={e => this.handleChange(e)} onSearch={() => this.handelSearch()} />
          <UserBar isLogin={this.state.isLogin} />
        </div>
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoviesByTitle: title => { dispatch(actionsCreater.getMoviesFromSearchbarTitleStart(title)) },
  }
}

export default connect(null, mapDispatchToProps)(Header)
