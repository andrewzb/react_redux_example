import * as actionTypes from './ActionTypes';

export const getMoviesOnLoadStart = () => {
    return {
        type: actionTypes.ON_START_GET_MOVIES_START,
    };
};

export const getMoviesOnLoadSuccess = (data) => {
    return {
        type: actionTypes.ON_START_GET_MOVIES_SUCCESS,
        data: data
    };
};

export const getMoviesOnLoadFail = () => {
    return {
        type: actionTypes.ON_START_GET_MOVIES_FAIL,
        error: true
    };
};