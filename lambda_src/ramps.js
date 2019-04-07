import data from './data/boat_ramps.geojson';

export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}