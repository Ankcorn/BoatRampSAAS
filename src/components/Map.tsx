import React, { useState, useEffect } from 'react';
import ReactMapGL, { ViewState, Marker } from 'react-map-gl';
import { dataLayer, defaultMapStyle } from '../maps';
import { fromJS } from 'immutable';
import { useRef } from 'react';
import useComponentSize from '@rehooks/component-size';
import { Anchor } from 'react-feather'
import { Ramp } from '../redux/ramps/types';
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
    <div ref={ref} className="rounded h-full w-3/5 shadow-lg">
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        latitude={mapData.latitude}
        longitude={mapData.longitude}
        zoom={mapData.zoom}
        mapStyle={mapStyle}
        width={size.width}
        height={size.height}
        onViewportChange={(viewport: ViewState) => {
          setMapData({ ...viewport })
        }
        }
      >
        {data && data.map((feature: Ramp, index: number) => (
          !Array.isArray(feature.geometry.coordinates) && // Checks data is parsed before plotting
            <Marker
              key={`marker-${index}`}
              longitude={feature.geometry.coordinates.longitude}
              latitude={feature.geometry.coordinates.latitude} >
              <Anchor color="#9f7aea" size={20} />
            </Marker>
        ))}
      </ReactMapGL>
    </div>
  )
}

export default Map;