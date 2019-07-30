import React from 'react'
import classes from './LikeList.module.css'
import * as actionsCreater from '../../store/data/ActionCreaters'
import { connect } from 'react-redux'
import LikeListItem from '../../components/LikeListItem/LikeListItem'
import Btn from '../../components/UI/Button/Button'
import NotItems from '../../components/NotItems/NotItems'

class LikeList extends React.Component {
  renderItemList () {
    return this.props.LikeList.map(el => {
      const id = el.Id
      return (
        <LikeListItem
          Title={el.Title}
          Poster={el.Poster}
          key={id}
          Id={id}
          click={() => this.props.removeItem({ Id: id })} />
      )
    })
  }

  render () {
    return (
      <div className={classes.Main}>
        <div className={classes.Container}>
          {(this.props.LikeList.length >= 1) ? this.renderItemList() : <NotItems /> }
        </div>
        <div className={classes.BtnContainer}>
          <Btn
            click={() => this.props.history.push('/')}
            title={'Go Back'}
            type={'button'} />
        </div>
      </div>
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
    removeItem: id => dispatch(actionsCreater.removeItemFromLikeListStart(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeList)
