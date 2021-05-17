import MapWrapper from '@/components/map-wrapper'
import MyPage from '@/components/my-page'
import getPlaces from '@/lib/get-places'
import Link from 'next/link'
import { Marker } from '@react-google-maps/api';
import Button from '@/components/button'

export default function PlacePage({ place }) {
  if (!place) return <></>

  return (
    <>
      <MyPage pageTitle={place.name}>
        <div className="flex flex-col text-center items-center my-8">
          <h1 className="text-6xl font-bold">
            Nie do wiary! {place.name}
            <Link href="/">
              <div className="text-blue-600 cursor-pointer">
                Mają Otwarte!
              </div>
            </Link>
          </h1>
        </div>
        
        <div className="flex h-4/6 gap-4">
          <div className="w-1/3 px-2 py-4 border-4 border-blue-500 rounded-md">
            <h2 className="tracking-widest text-s title-font font-medium text-gray-400 mb-1">{place.type}</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{place.name}</h1>
            <p className="leading-relaxed mb-3">{place.description}</p>
            <h2 className="tracking-widest text-s title-font font-medium text-gray-700 mb-1">tel: {place.telephone}</h2>
            <h2 className="tracking-widest text-s title-font font-medium text-gray-700 mb-1">{place.street} {place.streetnr}</h2>
            <h2 className="tracking-widest text-s title-font font-medium text-gray-700 mb-1">{place.city}</h2>

            <Button className="mt-8 transform transition duration-100 hover:scale-110">
              <Link href={"https://"+place.website} passHref={true}>
                <a className="cursor-pointer">{place.website}</a>
              </Link>
            </Button>

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