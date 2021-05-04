import MapWrapper from "./map-wrapper"
import { Marker } from '@react-google-maps/api';
import { useState, useCallback } from 'react'

export default function MapForForm({ onMapClick }) {
  
  const [marker, setMarker] = useState(null)
  
  const showMarker = useCallback(function callback(e) {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date(),
    })
  }, [])
  
  return (
    <MapWrapper onMapClick={(e)=>{ onMapClick(e); showMarker(e);}}>
      
      {marker ? 
        <Marker 
          position={{
            lat: marker.lat,
            lng: marker.lng,
          }}
        /> : <></>}

    </MapWrapper>
  )
}