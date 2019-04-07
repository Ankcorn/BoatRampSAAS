import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import dataReducer from './data/reducer';

const reducers = combineReducers({ data: dataReducer })
const store = createStore(reducers, devToolsEnhancer({}))

export default store;
