import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import * as actionCreater from './ActionCreaters'
import * as actionTypes from './ActionTypes'

const getMoviesStart = function * (action) {
  try {
    const title = yield action.title
    const req = yield axios(`http://www.omdbapi.com/?apikey=41601d2a&s=${title}`)
    const { totalResults, Search } = req.data
    const data = {
      MoviesOnPage: Search,
      ResCounter: totalResults,
    }
    if (data.MoviesOnPage) {
      yield put(actionCreater.getMoviesOnLoadSuccess(data))
    } else {
      const data = { Err: true }
      yield put(actionCreater.getMoviesOnLoadFail(data))
    }
  } catch (err) {
    const data = { Err: true }
    yield put(actionCreater.getMoviesOnLoadFail(data))
  }
}

const getMoviesByTitle = function * (action) {
  try {
    const title = yield action.title
    const req = yield axios(`http://www.omdbapi.com/?apikey=41601d2a&s=${title}`)
    const { totalResults, Search } = req.data
    const data = {
      MoviesOnPage: Search,
      ResCounter: totalResults,
    }
    if (data.MoviesOnPage) {
      yield put(actionCreater.getMoviesFromSearchbarTitleSuccess(data))
    } else {
      const data = { Err: true }
      yield put(actionCreater.getMoviesFromSearchbarTitleFail(data))
    }
  } catch (err) {
    const data = { Err: true }
    yield put(actionCreater.getMoviesFromSearchbarTitleFail(data))
  }
}

const getMoviesByTitleNextPage = function * (action) {
  try {
    const { title, page } = yield action
    const reqPage = yield page + 1
    const req = yield axios(`http://www.omdbapi.com/?apikey=41601d2a&s=${title}&page=${reqPage}`)
    const { totalResults, Search } = req.data
    const data = {
      MoviesOnPage: Search,
      ResCounter: totalResults,
    }
    if (data.MoviesOnPage) {
      yield put(actionCreater.getMoviesFromSearchbarTitleNextPageSuccess(data))
    } else {
      const data = { Err: true }
      yield put(actionCreater.getMoviesFromSearchbarTitleNextPageFail(data))
    }
  } catch (err) {
    const data = { Err: true }
    yield put(actionCreater.getMoviesFromSearchbarTitleNextPageFail(data))
  }
}

const getMoviesByTitlePrevPage = function * (action) {
  try {
    const { title, page } = yield action
    let reqPage = yield page - 1
    if (reqPage <= 0) { reqPage = 1 }
    const req = yield axios(`http://www.omdbapi.com/?apikey=41601d2a&s=${title}&page=${reqPage}`)
    const { totalResults, Search } = req.data
    const data = {
      MoviesOnPage: Search,
      ResCounter: totalResults,
    }
    if (data.MoviesOnPage) {
      yield put(actionCreater.getMoviesFromSearchbarTitlePrevPageSuccess(data))
    } else {
      const data = { Err: true }
      yield put(actionCreater.getMoviesFromSearchbarTitlePrevPageFail(data))
    }
  } catch (err) {
    const data = { Err: true }
    yield put(actionCreater.getMoviesFromSearchbarTitlePrevPageFail(data))
  }
}
const DataWatcher = function * () {
  yield takeEvery(actionTypes.ON_START_GET_MOVIES_START, getMoviesStart)
  yield takeEvery(actionTypes.GET_MOVIES_FROM_SEARCHBAR_TITLE_STAT, getMoviesByTitle)
  yield takeEvery(actionTypes.GET_MOVIES_FROM_NEXT_PAGE_STAT, getMoviesByTitleNextPage)
  yield takeEvery(actionTypes.GET_MOVIES_FROM_PREV_PAGE_STAT, getMoviesByTitlePrevPage)
}

export default DataWatcher
