import { RampActionTypes,  ADD_INITIAL_RAMPS } from './types'

export function sanitiseData(payload: any): RampActionTypes {
  return {
    type: ADD_INITIAL_RAMPS,
    payload
  }
}