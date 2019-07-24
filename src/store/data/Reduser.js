import * as actionsTypes from './ActionTypes';


const initialState = {
        CurrentPage: null,
        MoviesOnPage: [],
        ResCounter: null,
        Spinner: true,
        Err:false
};

const getMoviesOnLoadStart= (state, action) => {
    return {
        ...state,
        Spinner: true
    }
};

const getMoviesOnLoadSuccess= (state, action) => {
    return {
        ...state,
        MoviesOnPage: action.data.MoviesOnPage,
        ResCounter: action.data.ResCounter,
        Spinner: false
    }
};

const getMoviesOnLoadFail= (state, action) => {
    return {
        ...state,
        Spinner: false,
        Err: true
    }
};




const reducer = (state = initialState, action) => {
    switch (action.type) { 
        case actionsTypes.ON_START_GET_MOVIES_START: return getMoviesOnLoadStart(state, action);   
        case actionsTypes.ON_START_GET_MOVIES_SUCCESS: return getMoviesOnLoadSuccess(state, action);   
        case actionsTypes.ON_START_GET_MOVIES_FAIL: return getMoviesOnLoadFail(state, action);   
        default:
            return state;
    }
};

export default reducer;