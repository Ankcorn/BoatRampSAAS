import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { DataState } from './data/types';
import { RampState } from './ramps/types';
import dataReducer from './data/reducer';

export type State = {
  data: DataState,
  ramps: RampState
};

const reducers = combineReducers({ data: dataReducer })
const store = createStore(reducers, devToolsEnhancer({}))

export default store;
