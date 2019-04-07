import React, { useState, useEffect } from 'react';
import ReactMapGL, { ViewState, Marker } from 'react-map-gl';
import { dataLayer, defaultMapStyle } from '../maps';
import { fromJS } from 'immutable';
import { useRef } from 'react';
import useComponentSize from '@rehooks/component-size';
import { Octagon} from 'react-feather'
interface Props {
  data: any
}
const Map: React.FunctionComponent<Props> = ({ data }) => {
  let ref = useRef(null)
  let size = useComponentSize(ref)
  const [mapStyle, setMapStyle] = useState(defaultMapStyle);

  const [mapData, setMapData] = useState<ViewState>({
    latitude: -28,
    longitude: 153.4,
    zoom: 12,
    bearing: 0,
    pitch: 0
  });

  useEffect(() => {
    
    // if (data) {
    //   setMapStyle(mapStyle
    //     .setIn(['sources', 'ramps'], fromJS({ type: 'geojson', data }))
    //     .set('layers', defaultMapStyle.get('layers').push(dataLayer)));
    //     console.log(data)
    // }
  }, [data]);

  return (
      <div ref={ref} className="absolute rounded h-full w-full shadow-lg overflow-hidden m-5 ">
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          latitude={mapData.latitude}
          longitude={mapData.longitude}
          zoom={mapData.zoom}
          mapStyle={mapStyle}
          width={size.width-40}
          height={size.height-100}
          onViewportChange={(viewport: ViewState) => {
            setMapData({ ...viewport })
          }
          }
        >
        {data && data.features.map((feature: any, index: number) => (
          <Marker 
            key={`marker-${index}`}
            longitude={feature.geometry.coordinates[0][0][0][0]}
            latitude={feature.geometry.coordinates[0][0][0][1]} >
            <Octagon color="#9f7aea" size={10} />
          </Marker>
        ))}
        </ReactMapGL>
      </div>
  )
}

export default Map;