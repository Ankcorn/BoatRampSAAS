import { DataActionTypes, DATA_DELETED, DATA_ERROR, DATA_EXISTS, DATA_LOADING } from './types'

export function loadingData(): DataActionTypes {
  return {
    type: DATA_LOADING
  }
}

export function deleteData(): DataActionTypes {
  return {
    type: DATA_DELETED
  }
}

export function loadingDataError(): DataActionTypes {
  return {
    type: DATA_ERROR
  }
}

export function saveData(payload:JSON): DataActionTypes {
  return {
    type: DATA_EXISTS,
    payload
  }
}