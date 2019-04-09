import { RawCoordinates, Coordinates, RampState} from '../redux/ramps/types'

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

interface PiChartData {
  labels: string[],
  datasets: [{
    data: number[],
    backgroundColor: string[],
  }]
};

export function calculatePiChartData(data: RampState): PiChartData {
  return data.reduce((sum: PiChartData, el) => {
    const indexOfMaterial = sum.labels.indexOf(el.properties.material);
    return {
      labels: Array.from(new Set([ ...sum.labels, el.properties.material ])).map(String),
      datasets: [{
        data: indexOfMaterial !== -1 ? sum.datasets[0].data.map((el, index) => {
          if (index === indexOfMaterial) {
            return el + 1
          }
          return el
        }): [...sum.datasets[0].data, 1],
        backgroundColor: sum.datasets[0].backgroundColor
      }]
    }
}, {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: ['#234E52',
    '#2C7A7B',
    '#38B2AC',
    '#81E6D9',
    '#E6FFFA']
  }]
} as PiChartData)
}