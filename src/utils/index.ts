import { RawCoordinates, Coordinates} from '../redux/ramps/types'

export function parseCoordinates(raw_coordinates: RawCoordinates | Coordinates): Coordinates {
  if (!Array.isArray(raw_coordinates)) {
    return raw_coordinates
  }
  const averageLongitude = raw_coordinates[0][0].reduce((sum, el) => sum + el[0], 0) 
    / raw_coordinates[0][0].length;
  const averageLatitude = raw_coordinates[0][0].reduce((sum, el) => sum + el[1], 0) 
    / raw_coordinates[0][0].length;
  return {
    longitude: averageLongitude,
    latitude: averageLatitude,
  }
}