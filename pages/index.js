import Link from 'next/link'

import Button from '@/components/button'
import MyPage from '@/components/my-page'
import Entries from '@/components/entries'

import { useEntries } from '@/lib/swr-hooks'
import MyMap from '@/components/my-map'

export default function Home() {

  const { entries, isLoading } = useEntries()

  return (
    <MyPage pageTitle='Witaj'>
      <div className="flex flex-col text-center items-center my-8">
        <h1 className="text-6xl font-bold">
          Witaj na
          <div className="text-blue-600">
            MamyOtwarte!
          </div>
        </h1>
        <p className="pt-4 text-2xl">
          Znajdziesz tu otwarte restauracje oraz lokale gastronomiczne {' '}
          <Button className="mt-8">
            <Link href="/new-place">
              <a>Dodaj Nowy</a>
            </Link>
          </Button>{' '}
        </p>
      </div>
      <div className="flex overflow-hidden h-4/6 gap-4">
        <div className="w-1/3 px-2 py-4 bg-blue-500 text-center overflow-auto rounded-md flex">
          
          {isLoading &&
            <h1 className="text-white text-2xl m-auto">Ładowanie...</h1>
          }

          {!isLoading &&
            <Entries entries={entries} />
          }
      
        </div>
        <div className="w-2/3 px-2 py-4 bg-blue-400 text-center rounded-md">
        {!isLoading &&
          <MyMap entries={entries}/>
        }
        </div>
      </div>
      
    </MyPage>
  )
}
