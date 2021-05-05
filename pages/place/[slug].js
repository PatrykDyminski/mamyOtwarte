import MyPage from '@/components/my-page'
import { server } from '../../config';

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

  const res = await fetch(`${server}/api/get-place/${params.slug}`)
  const place = await res.json()

  return {
    props: {
      place,
    },
  }
}

export async function getStaticPaths() {

  const res = await fetch(`${server}/api/get-places`)
  const places = await res.json()

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