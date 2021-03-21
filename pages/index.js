import Link from 'next/link'

import Button from '@/components/button'
import MyPage from '@/components/my-page'

export default function Home() {
  return (
    <MyPage pageTitle='Witaj'>
      <div className="flex flex-col text-center items-center my-8">
        <h1 className="text-6xl font-bold">
          Witaj na
          <div className="text-blue-600">
            MamyOtwarte!
          </div>
        </h1>
        <p className="pt-8 text-2xl">
          Znajdziesz tu otwarte restauracje oraz lokale gastronomiczne{' '}
        </p>
        <Button className="mt-8">
          <Link href="/new-place">
            <a>Dodaj</a>
          </Link>
        </Button>
      </div>
    </MyPage>
  )
}
