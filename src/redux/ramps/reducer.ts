import { RampActionTypes, ADD_INITIAL_RAMPS, RampState, Ramp } from './types';
import { parseCoordinates } from '../../utils';

const initialData: RampState = []

const ramps = (state = initialData, action: RampActionTypes): RampState => {
  console.log(action)
  switch (action.type) {
    case ADD_INITIAL_RAMPS:
      return action.payload.features.map((feature:Ramp) => ({
        ...feature,
        geometry: {
          ...feature.geometry,
          coordinates: parseCoordinates(feature.geometry.coordinates)
        }
      })).filter((el : any) => 
        el.geometry.coordinates.longitude > action.top &&
        el.geometry.coordinates.longitude < action.bottom &&
        el.geometry.coordinates.latitude > action.left &&
        el.geometry.coordinates.latitude < action.right
        ) as RampState; 
    default:
      return state
  }
}

export default ramps;