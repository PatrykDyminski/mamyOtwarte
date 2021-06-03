import MapWrapper from '@/components/maps/map-wrapper'
import { Marker } from '@react-google-maps/api';
import { useRouter } from 'next/router'

export default function MapWithEntries({ entries }) {

  const router = useRouter()

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
            onClick={() => {router.push(`/place/${e.slug}`)} }
          />
        ))}
      </MapWrapper>
    )
  } else {
    return null
  }
}