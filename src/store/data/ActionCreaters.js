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
// get movie on load on movie page start
export const getMoviesByIdStart = data => {
  return {
    type: actionTypes.GET_MOVIES_BY_ID_START,
    Id: data.Id,
  }
}

export const getMoviesByIdSuccess = data => {
  return {
    type: actionTypes.GET_MOVIES_BY_ID_SUCCESS,
    data: data.MovieData,
  }
}

export const getMoviesByIdFail = () => {
  return {
    type: actionTypes.GET_MOVIES_BY_ID_FAIL,
    error: true,
  }
}

// get movie on load on movie page end
// TOOGLE MOVIE IN LOCALSTORAGE START

export const toggleMovieInLocalstorgeStart = data => {
  return {
    type: actionTypes.TOOGLE_MOVIE_IN_LOCALSTORAGE_START,
    Id: data.Id,
    Poster: data.Poster,
    Title: data.Title,
  }
}

export const toggleMovieInLocalstorgeSuccess = data => {
  return {
    type: actionTypes.TOOGLE_MOVIE_IN_LOCALSTORAGE_SUCCESS,
    data: data,
  }
}

export const toggleMovieInLocalstorgeFail = () => {
  return {
    type: actionTypes.TOOGLE_MOVIE_IN_LOCALSTORAGE_FAIL,
  }
}

// TOOGLE MOVIE IN LOCALSTORAGE END
// REMOVE ITEMS FROM LIKELIST START

export const removeItemFromLikeListStart = data => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_LIKELIST_START,
    Id: data.Id,
  }
}

export const removeItemFromLikeListSuccess = data => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_LIKELIST_START,
    Id: data.id,
  }
}
export const removeItemFromLikeListFail = data => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_LIKELIST_START,
    Id: data.id,
  }
}

// REMOVE ITEMS FROM LIKELIST END
