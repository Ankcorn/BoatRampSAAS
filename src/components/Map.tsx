import React, { useState, SetStateAction } from 'react';
import ReactMapGL, { ViewStateChangeInfo, ViewState } from 'react-map-gl';

function Map() {
  const [mapData, setMapData] = useState<ViewState>({
    latitude: 37.8,
    longitude: 96,
    zoom: 3,
    bearing: 0,
    pitch: 0
  });
  return (
    <div className="absolute rounded h-4/5 w-3/5 shadow-lg overflow-hidden">
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        latitude={mapData.latitude}
        longitude={mapData.longitude}
        zoom={mapData.zoom}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        width="100%"
        height="100%"
        onViewportChange={(viewport: ViewState) => {
          setMapData({ ...viewport})
        }
        }
      />
    </div>
  )
}

export default Map;