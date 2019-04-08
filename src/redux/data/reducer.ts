import { DataActionTypes, DATA_DELETED, DATA_ERROR, DATA_EXISTS, DATA_LOADING, DataState } from './types'
import { any } from 'prop-types';

const initialData: DataState = {
  loading: false,
  error: false,
  raw: undefined,
}

const data = (state = initialData, action: DataActionTypes): DataState => {
  switch (action.type) {
    case DATA_DELETED:
      return initialData;
    case DATA_ERROR:
      return {
        error: true,
        raw: undefined,
        loading: false
      };
    case DATA_EXISTS:
      return {
        raw: action.payload,
        error: false,
        loading: false
      };
    case DATA_LOADING:
      return {
        loading: true,
        error: false,
        raw: undefined
      };
    default:
      return state
  }
}

export default data;