import { RampActionTypes,  ADD_INITIAL_RAMPS } from './types'

export function sanitiseData(payload: any, top: number = -180, bottom: number = 180, right: number = 90, left: number = -90): RampActionTypes {
  console.log('sanitizeeeee', top, bottom, )
  return {
    type: ADD_INITIAL_RAMPS,
    payload,
    top,
    bottom,
    right,
    left
  }
}