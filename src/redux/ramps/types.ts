export const ADD_INITIAL_RAMPS = 'ADD_INITIAL_RAMPS';

export interface Coordinates {
  latitude: number,
  longitude: number
}

export type RawCoordinates = [[[number[]]]]

enum Type {
  Feature = 'Feature'
}

export interface Ramp {
  type: Type,
  id: string,
  geometry: {
      type: string,
      coordinates: Coordinates | RawCoordinates
  },
  geometry_name: string,
  properties: {
      rec_id: number,
      status: string,
      asset_numb: string,
      type: string,
      material: string,
      number_lan: number,
      add_improv: string,
      top_rl: number,
      toe_rl: number,
      area_: number,
      comments: string,
      documents: string,
      inspectors: any,
      inspection: Date,
      constructi: any,
      record_cre: Date,
      last_updat: any,
      update_dat: Date,
      disposal_d: any,
      positional: string,
      level_accu: any,
      owner: number,
      project_nu: any,
      file_numbe: any,
      folder_num: any,
      drawing_nu: any,
      survey_num: any,
      condition: number,
      historic_c: number,
      funding_ba: string,
      mi_symbolo: string,
      mi_prinx: number,
      createuser: any,
      createdate: any,
      updateuser: any,
      updatedate: any,
      shape_leng: number,
      shape_area: Number
  }
}

export type RampState = Ramp[]

interface AddInitialRampsAction {
  type: typeof ADD_INITIAL_RAMPS,
  payload: any,
  top: number,
  bottom: number,
  right: number,
  left: number
}

export type RampActionTypes = AddInitialRampsAction;
