import MyPage from '@/components/my-page'
import getSheet from '@/lib/get-sheet'

export default function PlacePage({ place }) {
  if (!place) return <></>

  return (
    <>
      <MyPage pageTitle={place.name}>
        {place.name}
      </MyPage>
    </>
  )
}

export async function getStaticProps({ params }) {

  /*const res = await fetch(`http://localhost:3000/api/get-place/${params.slug}`)
  const place = await res.json()*/

  var query = { slug: params.slug };
  const place = await getSheet(query, "ZweryfikowaneFiltr");

  return {
    props: {
      place: place[0],
    },
  }
}

export async function getStaticPaths() {

  //const res = await fetch('http://localhost:3000/api/get-places')
  //const places = await res.json()
  var query;
  const places = await getSheet(query, "Zweryfikowane");

  const paths = places.map((place) => {
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