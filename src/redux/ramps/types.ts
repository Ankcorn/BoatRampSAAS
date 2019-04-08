export const ADD_INITIAL_RAMPS = 'ADD_INITIAL_RAMPS';

export interface Coordinates {
  latitude: Number,
  longitude: Number
}

export type RawCoordinates = [[[number[]]]]

enum Type {
  Feature = 'Feature'
}

export interface Ramp {
  type: Type,
  id: String,
  geometry: {
      type: String,
      coordinates: Coordinates | RawCoordinates
  },
  geometry_name: String,
  properties: {
      rec_id: Number,
      status: String,
      asset_numb: String,
      type: String,
      material: String,
      number_lan: Number,
      add_improv: String,
      top_rl: Number,
      toe_rl: Number,
      area_: Number,
      comments: String,
      documents: String,
      inspectors: any,
      inspection: Date,
      constructi: any,
      record_cre: Date,
      last_updat: any,
      update_dat: Date,
      disposal_d: any,
      positional: String,
      level_accu: any,
      owner: Number,
      project_nu: any,
      file_numbe: any,
      folder_num: any,
      drawing_nu: any,
      survey_num: any,
      condition: Number,
      historic_c: Number,
      funding_ba: String,
      mi_symbolo: String,
      mi_prinx: Number,
      createuser: any,
      createdate: any,
      updateuser: any,
      updatedate: any,
      shape_leng: Number,
      shape_area: Number
  }
}

export type RampState = Ramp[]

interface AddInitialRampsAction {
  type: typeof ADD_INITIAL_RAMPS,
  payload: any 
}

export type RampActionTypes = AddInitialRampsAction;
