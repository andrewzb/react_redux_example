import * as actionsTypes from './ActionTypes'
import * as config from '../../config'

const initialState = {
  Title: config.DEF_TITLE,
  CurrentPage: 1,
  MoviesOnPage: [],
  ResCounter: null,
  MovieData: {},
  LikeList: [],
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
// get movies from  id start

const getMoviesByIdStart = (state, action) => {
  return {
    ...state,
    MovieData: null,
    Err: false,
    Spinner: true,
  }
}

const getMoviesByIdSuccess = (state, action) => {
  return {
    ...state,
    MovieData: action.data,
    Err: false,
    Spinner: false,
  }
}

const getMoviesByIdFail = (state, action) => {
  return {
    ...state,
    Err: true,
    Spinner: false,
  }
}
// get movies from  id end
// TOOGLE MOVIE IN LOCALSTORAGE START

const toggleMovieInLocalstorgeStart = (state, action) => {
  return {
    ...state,
  }
}

const toggleMovieInLocalstorgeSuccess = (state, action) => {
  let inArray
  state.LikeList.forEach(el => {
    if (el.Id === action.data.Id) inArray = true
  })
  let newArray
  if (inArray) {
    newArray = state.LikeList.filter(el => el.Id !== action.data.Id)
  } else {
    newArray = [...state.LikeList, action.data]
  }
  return {
    ...state,
    LikeList: newArray,
  }
}

const toggleMovieInLocalstorgeFail = (state, action) => {
  return {
    ...state,
  }
}

// TOOGLE MOVIE IN LOCALSTORAGE END
// REMOVE ITEM FROM LIKELIST START

const removeItemFromlikeListStart = (state, action) => {
  const { Id } = action
  const newArray = state.LikeList.filter(el => el.Id !== Id)
  return {
    ...state,
    LikeList: newArray,
  }
}

// REMOVE ITEM FROM LIKELIST END
// get movies for current page start

const getMoviesForCurrentPageStart = (state, action) => {
  return {
    ...state,
    Spinner: true,
    Err: false,
  }
}

const getMoviesForCurrentPageSuccess = (state, action) => {
  return {
    ...state,
    MoviesOnPage: action.data.MoviesOnPage,
    ResCounter: action.data.ResCounter,
    Spinner: false,
    Err: false,
  }
}

const getMoviesForCurrentPageFail = (state, action) => {
  return {
    ...state,
    Spinner: false,
    Err: true,
  }
}

// get movies for current page END

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
      // get movies from  id start
    case actionsTypes.GET_MOVIES_BY_ID_START: return getMoviesByIdStart(state, action)
    case actionsTypes.GET_MOVIES_BY_ID_SUCCESS: return getMoviesByIdSuccess(state, action)
    case actionsTypes.GET_MOVIES_BY_ID_FAIL: return getMoviesByIdFail(state, action)
      // get movies from id end
      // get movies from  id start
    case actionsTypes.TOOGLE_MOVIE_IN_LOCALSTORAGE_START: return toggleMovieInLocalstorgeStart(state, action)
    case actionsTypes.TOOGLE_MOVIE_IN_LOCALSTORAGE_SUCCESS: return toggleMovieInLocalstorgeSuccess(state, action)
    case actionsTypes.TOOGLE_MOVIE_IN_LOCALSTORAGE_FAIL: return toggleMovieInLocalstorgeFail(state, action)
      // get movies from id end
      // get movies from  id start
    case actionsTypes.REMOVE_ITEM_FROM_LIKELIST_START: return removeItemFromlikeListStart(state, action)
    // case actionsTypes.REMOVE_ITEM_FROM_LIKELIST_SUCCESS: return removeItemFromlikeListSuccses(state, action)
    // case actionsTypes.REMOVE_ITEM_FROM_LIKELIST_FAIL: return removeItemFromlikeListFail(state, action)
      // get movies from id end
      // get movies for current page start
    case actionsTypes.GET_MOVIE_FOR_CURRENT_PAGE_START: return getMoviesForCurrentPageStart(state, action)
    case actionsTypes.GET_MOVIE_FOR_CURRENT_PAGE_SUCCESS: return getMoviesForCurrentPageSuccess(state, action)
    case actionsTypes.GET_MOVIE_FOR_CURRENT_PAGE_FAIL: return getMoviesForCurrentPageFail(state, action)
    // get movies for current page start
    default:
      return state
  }
}

export default reducer
