import { RampActionTypes, ADD_INITIAL_RAMPS, RampState, Ramp } from './types';
import { parseCoordinates } from '../../utils';

const initialData: RampState = []

const ramps = (state = initialData, action: RampActionTypes): RampState => {
  switch (action.type) {
    case ADD_INITIAL_RAMPS:
      return action.payload.features.map((feature:Ramp) => ({
        ...feature,
        geometry: {
          ...feature.geometry,
          coordinates: parseCoordinates(feature.geometry.coordinates)
        }
      })) as RampState; 
    default:
      return state
  }
}

export default ramps;