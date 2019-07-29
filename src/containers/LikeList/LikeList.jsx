import React from 'react'
import classes from './LikeList.module.css'
import * as actionsCreater from '../../store/data/ActionCreaters'
import { connect } from 'react-redux'
import LikeListItem from '../../components/LikeListItem/LikeListItem'

class LikeList extends React.Component {
  renderItemList () {
    return this.props.LikeList.map(el => {
      const id = el.Id
      return (
        <LikeListItem
          Title={el.Title}
          Poster={el.Poster}
          Id={id}
          click={() => this.props.removeItem({ Id: id })} />
      )
    })
  }

  render () {
    return (
      <div className={classes.Main}>
        <div className={classes.Container}>
          {this.renderItemList()}
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
