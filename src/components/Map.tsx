import React, { useState, useEffect } from 'react';
import ReactMapGL, { ViewState, Marker } from 'react-map-gl';
import { defaultMapStyle } from '../maps';
import { connect } from 'react-redux';
import { useRef } from 'react';
import useComponentSize from '@rehooks/component-size';
import { Anchor } from 'react-feather'
import { Ramp } from '../redux/ramps/types';
import { updateMap } from '../redux/map/actions';
import { Dispatch } from 'redux';
import { sanitiseData } from '../redux/ramps/actions';
interface Props {
  data: any,
  updateMap: Function,
}

const Map: React.FunctionComponent<Props> = ({ data, updateMap }) => {
  let ref = useRef(null)
  let size = useComponentSize(ref);
  const [mapStyle] = useState(defaultMapStyle);
  
  const [mapData, setMapData] = useState<ViewState>({
    latitude: -28,
    longitude: 153.4,
    zoom: 12,
    bearing: 0,
    pitch: 0
  });

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
          // This needs a lot more thought
          // const bounds = mapRef.getMap().getBounds()
          // sanitiseData(
          //   { features: data},
          //   bounds._ne.lat,
          //   bounds._sw.lat,
          //   bounds._sw.lng,
          //   bounds._ne.lng
          // )
          updateMap(viewport)
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateMap: (data:ViewState) => dispatch(updateMap(data)),
    sanitiseData: (data:any, top: number, bottom: number, right: number, left: number) => dispatch(sanitiseData(data, top, bottom, right, left))
  }
}
export default connect(null, mapDispatchToProps)(Map);