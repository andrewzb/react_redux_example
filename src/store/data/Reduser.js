import * as actionsTypes from './ActionTypes'

const initialState = {
  Title: 'star%2btrek',
  CurrentPage: 1,
  MoviesOnPage: [],
  ResCounter: null,
  Spinner: true,
  Err: false,
}
// Get movies on load start
const getMoviesOnLoadStart = (state, action) => {
  return {
    ...state,
    Spinner: true,
  }
}

const getMoviesOnLoadSuccess = (state, action) => {
  return {
    ...state,
    MoviesOnPage: action.data.MoviesOnPage,
    ResCounter: action.data.ResCounter,
    Spinner: false,
  }
}

const getMoviesOnLoadFail = (state, action) => {
  return {
    ...state,
    Spinner: false,
    Err: true,
  }
}
// Get movies on load end
// get movies from searchbar title start
const getMoviesFromSearchbarTitleStart = (state, action) => {
  return {
    ...state,
    Title: action.title,
    Err: false,
    Spinner: true,
  }
}

const getMoviesFromSearchbarTitleSuccess = (state, action) => {
  return {
    ...state,
    MoviesOnPage: action.data.MoviesOnPage,
    ResCounter: action.data.ResCounter,
    CurrentPage: 1,
    Spinner: false,
  }
}

const getMoviesFromSearchbarTitleFail = (state, action) => {
  return {
    ...state,
    Spinner: false,
    Err: true,
  }
}
// get movies from searchbar title end
// get movies from searchbar title next page start

const getMoviesFromSearchbarTitlNextPageStart = (state, action) => {
  return {
    ...state,
    Spinner: true,
  }
}

const getMoviesFromSearchbarTitlNextPageSuccess = (state, action) => {
  return {
    ...state,
    MoviesOnPage: action.data.MoviesOnPage,
    ResCounter: action.data.ResCounter,
    CurrentPage: state.CurrentPage + 1,
    Err: false,
    Spinner: false,
  }
}

const getMoviesFromSearchbarTitlNextPageFail = (state, action) => {
  return {
    ...state,
    Spinner: false,
    Err: true,
  }
}

// get movies from searchbar title next page end
// get movies from searchbar title prev page start

const getMoviesFromSearchbarTitlPrevPageStart = (state, action) => {
  return {
    ...state,
    Spinner: true,
  }
}

const getMoviesFromSearchbarTitlPrevPageSuccess = (state, action) => {
  let page = state.CurrentPage - 1
  if (page <= 0) { page = 1 }
  return {
    ...state,
    MoviesOnPage: action.data.MoviesOnPage,
    ResCounter: action.data.ResCounter,
    CurrentPage: page,
    Err: false,
    Spinner: false,
  }
}

const getMoviesFromSearchbarTitlPrevPageFail = (state, action) => {
  return {
    ...state,
    Spinner: false,
    Err: true,
  }
}

// get movies from searchbar title prev page end

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Get movies on load start
    case actionsTypes.ON_START_GET_MOVIES_START: return getMoviesOnLoadStart(state, action)
    case actionsTypes.ON_START_GET_MOVIES_SUCCESS: return getMoviesOnLoadSuccess(state, action)
    case actionsTypes.ON_START_GET_MOVIES_FAIL: return getMoviesOnLoadFail(state, action)
      // Get movies on load end
      // get movies from searchbar title start
    case actionsTypes.GET_MOVIES_FROM_SEARCHBAR_TITLE_STAT: return getMoviesFromSearchbarTitleStart(state, action)
    case actionsTypes.GET_MOVIES_FROM_SEARCHBAR_TITLE_SUCCESS: return getMoviesFromSearchbarTitleSuccess(state, action)
    case actionsTypes.GET_MOVIES_FROM_SEARCHBAR_TITLE_FAIL: return getMoviesFromSearchbarTitleFail(state, action)
      // get movies from searchbar title end
      // get movies from searchbar title next start
    case actionsTypes.GET_MOVIES_FROM_NEXT_PAGE_STAT: return getMoviesFromSearchbarTitlNextPageStart(state, action)
    case actionsTypes.GET_MOVIES_FROM_NEXT_PAGE_SUCCESS: return getMoviesFromSearchbarTitlNextPageSuccess(state, action)
    case actionsTypes.GET_MOVIES_FROM_NEXT_PAGE_FAIL: return getMoviesFromSearchbarTitlNextPageFail(state, action)
      // get movies from searchbar title next end
      // get movies from searchbar title next start
    case actionsTypes.GET_MOVIES_FROM_PREV_PAGE_STAT: return getMoviesFromSearchbarTitlPrevPageStart(state, action)
    case actionsTypes.GET_MOVIES_FROM_PREV_PAGE_SUCCESS: return getMoviesFromSearchbarTitlPrevPageSuccess(state, action)
    case actionsTypes.GET_MOVIES_FROM_PREV_PAGE_FAIL: return getMoviesFromSearchbarTitlPrevPageFail(state, action)
      // get movies from searchbar title next end

    default:
      return state
  }
}

export default reducer
