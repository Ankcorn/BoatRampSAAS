import { MapActionTypes, MapState, UPDATE_MAP } from './types';

const initialData: MapState = {
  latitude: 0,
  longitude: 0,
  zoom: 0,
}

const map = (state = initialData, action: MapActionTypes): MapState => {
  switch (action.type) {
    case UPDATE_MAP:
      return action.payload; 
    default:
      return state
  }
}

export default map;