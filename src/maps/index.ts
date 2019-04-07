import {fromJS} from 'immutable';
import MAP_STYLE from './style.json';
// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = fromJS({
  id: 'data',
  source: 'ramps',
  type: 'fill',
  interactive: true,
  paint: {
    'fill-color': '#9f7aea',
    'fill-opacity': 0.8
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);