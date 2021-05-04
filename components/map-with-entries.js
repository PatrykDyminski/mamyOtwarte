import MapWrapper from "./map-wrapper"
import { Marker } from '@react-google-maps/api';

export default function MapWithEntries({ entries }) {

  if (entries) {
    return (
      <MapWrapper onMapClick={e => console.log(e.latLng.lat())}>
        {entries.map(e => (
          <Marker
            key={e.lat+e.lng}
            position={{
              lat: parseFloat(e.lat),
              lng: parseFloat(e.lng),
            }}
          />
        ))}
      </MapWrapper>
    )
  } else {
    return null
  }
}