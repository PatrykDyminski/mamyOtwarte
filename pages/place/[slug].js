import MapWrapper from '@/components/map-wrapper'
import MyPage from '@/components/my-page'
import getPlaces from '@/lib/get-places'
import { Marker } from '@react-google-maps/api';

export default function PlacePage({ place }) {
  if (!place) return <></>

  return (
    <>
      <MyPage pageTitle={place.name}>
        <div className="flex flex-col text-center items-center my-8">
          <h1 className="text-6xl font-bold">
            Nie do wiary! {place.name}
            <div className="text-blue-600">
              Mają Otwarte!
            </div>
          </h1>
        </div>
        
        <div className="flex overflow-hidden h-4/6 gap-4">
          <div className="w-1/3 px-2 py-4 bg-blue-500 rounded-md flex">
            <ul className ="list-disc text-white text-2xl pt-4 pl-8">
              <li>{place.type}</li>
              <li>{place.opis}</li>
              <li>{place.telephone}</li>
              <li>{place.website}</li>
              <li>{place.street} {place.streetnr}</li>
              <li>{place.city}</li>
            </ul>
          </div>
          <div className="w-2/3 px-2 py-4 bg-blue-400 text-center rounded-md">
            <MapWrapper onMapClick={e => console.log(e.latLng.lat())}>
              <Marker
                position={{
                  lat: parseFloat(place.lat),
                  lng: parseFloat(place.lng),
                }}
              />
            </MapWrapper>
          </div>
        </div>
      </MyPage>
    </>
  )
}

export async function getStaticProps({ params }) {

  var query = { slug: params.slug };
  var place = await getPlaces(query, true);
  return {
    props: {
      place: place[0],
    },
  }
}

export async function getStaticPaths() {

  var query;
  const places = await getPlaces(query, false);

  const paths = places.map((place) => {
    console.log(place.slug)
    return {
      params: {
        slug: place.slug,
      },
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}