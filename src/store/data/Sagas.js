import axios from 'axios';
import { put, all, fork, takeEvery } from 'redux-saga/effects';
import * as actionCreater from './ActionCreaters';
import * as actionTypes from './ActionTypes';

const getMoviesStart = function* () {
    try{
        const req = yield axios('http://www.omdbapi.com/?apikey=41601d2a&s=star%2btrek');  
        const {totalResults, Search, Response} = req.data
        const data = {
            MoviesOnPage: Search,
            ResCounter: totalResults
        };
        if(Response){
            yield put(actionCreater.getMoviesOnLoadSuccess(data));
        }else{
            const data = {Err:true};
            yield put(actionCreater.getMoviesOnLoadFail(data));
        }

    }catch(err){
        const data = {Err:true};
        yield put(actionCreater.getMoviesOnLoadFail(data));
    }
};


 const DataWatcher = function* () {
    yield takeEvery(actionTypes.ON_START_GET_MOVIES_START, getMoviesStart);
};

export default DataWatcher;
