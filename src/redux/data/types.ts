export const DATA_LOADING = 'DATA_LOADING';
export const DATA_ERROR = 'DATA_ERROR';
export const DATA_EXISTS = 'DATA_EXISTS';
export const DATA_DELETED = 'DATA_DELETED';

export interface DataState {
  loading: Boolean,
  error: Boolean,
  raw: any,
}

interface DataLoadingAction {
  type: typeof DATA_LOADING
}

interface DataErrorAction {
  type: typeof DATA_ERROR
}

interface DataExistsAction {
  type: typeof DATA_EXISTS
  payload: any
}

interface DataDeleteAction {
  type: typeof DATA_DELETED
}


export type DataActionTypes = DataLoadingAction | DataErrorAction | DataExistsAction | DataDeleteAction;
