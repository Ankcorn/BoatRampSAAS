import { MapActionTypes, UPDATE_MAP } from './types'

export function updateMap(payload: any): MapActionTypes {
  return {
    type: UPDATE_MAP,
    payload
  }
}