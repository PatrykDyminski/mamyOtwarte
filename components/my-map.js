import { useState, memo, useCallback } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 51.759,
  lng: 19.457
};

export default function MyMap({ onMapClick, showSingleMarker }) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY
  })

  const [map, setMap] = useState(null)
  const [marker, setMarker] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const showMarker = useCallback(function callback(e) {
    if(showSingleMarker){
      setMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      })
    }
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={(e)=>{ onMapClick(e); showMarker(e);}}
    >
      {showSingleMarker && marker ? 
        <Marker 
          position={{
            lat: marker.lat,
            lng: marker.lng,
          }}
        /> : <></>}
    </GoogleMap>
  ) : <></>
}