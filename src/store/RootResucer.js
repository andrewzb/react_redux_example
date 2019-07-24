import {combineReducers} from 'redux';
import dataReducer from './data/Reduser';


export default combineReducers({
    // burgerBuilder: burgerBuilderReducer,
    // order: orderReducer
    data: dataReducer
});