import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import homeReducer from './homeReducer';
import createBlogReducer from './createBlogReducer';
//untuk mengirimkan value atau state(global)
//state adalah value state global
//default value initialState
const reducer = combineReducers({homeReducer, globalReducer,createBlogReducer})

export default reducer;