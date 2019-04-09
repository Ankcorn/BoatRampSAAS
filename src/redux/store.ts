import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { DataState } from './data/types';
import { RampState } from './ramps/types';
import { MapState } from './map/types';
import dataReducer from './data/reducer';
import rampsReducer from './ramps/reducer';
import mapReducer from './map/reducer';

export type State = {
  data: DataState,
  ramps: RampState,
  map: MapState
};

const reducers = combineReducers({ data: dataReducer, ramps: rampsReducer, map: mapReducer })
const store = createStore(reducers, devToolsEnhancer({}))

export default store;
