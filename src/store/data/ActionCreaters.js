import * as actionTypes from './ActionTypes'
// Get movies on load start
export const getMoviesOnLoadStart = data => {
  return {
    type: actionTypes.ON_START_GET_MOVIES_START,
    title: data.title,
  }
}

export const getMoviesOnLoadSuccess = data => {
  return {
    type: actionTypes.ON_START_GET_MOVIES_SUCCESS,
    data: data,
  }
}

export const getMoviesOnLoadFail = () => {
  return {
    type: actionTypes.ON_START_GET_MOVIES_FAIL,
    error: true,
  }
}
// Get movies on load end
// get movies from searchbar title start
export const getMoviesFromSearchbarTitleStart = data => {
  return {
    type: actionTypes.GET_MOVIES_FROM_SEARCHBAR_TITLE_STAT,
    title: data.title,
  }
}

export const getMoviesFromSearchbarTitleSuccess = data => {
  return {
    type: actionTypes.GET_MOVIES_FROM_SEARCHBAR_TITLE_SUCCESS,
    data: data,
  }
}

export const getMoviesFromSearchbarTitleFail = () => {
  return {
    type: actionTypes.GET_MOVIES_FROM_SEARCHBAR_TITLE_FAIL,
    error: true,
  }
}
// get movies from searchbar title end
// get movies from searchbar title next page start
export const getMoviesFromSearchbarTitleNextPageStart = data => {
  return {
    type: actionTypes.GET_MOVIES_FROM_NEXT_PAGE_STAT,
    title: data.title,
    page: data.page,
  }
}

export const getMoviesFromSearchbarTitleNextPageSuccess = data => {
  return {
    type: actionTypes.GET_MOVIES_FROM_NEXT_PAGE_SUCCESS,
    data: data,
  }
}

export const getMoviesFromSearchbarTitleNextPageFail = () => {
  return {
    type: actionTypes.GET_MOVIES_FROM_NEXT_PAGE_FAIL,
    error: true,
  }
}

// get movies from searchbar title next page end
// get movies from searchbar title prev page start
export const getMoviesFromSearchbarTitlePrevPageStart = data => {
  return {
    type: actionTypes.GET_MOVIES_FROM_PREV_PAGE_STAT,
    title: data.title,
    page: data.page,
  }
}

export const getMoviesFromSearchbarTitlePrevPageSuccess = data => {
  return {
    type: actionTypes.GET_MOVIES_FROM_PREV_PAGE_SUCCESS,
    data: data,
  }
}

export const getMoviesFromSearchbarTitlePrevPageFail = () => {
  return {
    type: actionTypes.GET_MOVIES_FROM_PREV_PAGE_FAIL,
    error: true,
  }
}

// get movies from searchbar title prev page end
