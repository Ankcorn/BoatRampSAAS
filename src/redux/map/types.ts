export const UPDATE_MAP = 'UDPDATE_MAP';
import { ViewState } from 'react-map-gl';

export type MapState = ViewState;

interface AddInitialRampsAction {
  type: typeof UPDATE_MAP
  payload: ViewState 
}

export type MapActionTypes = AddInitialRampsAction;
