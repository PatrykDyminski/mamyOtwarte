import Link from 'next/link'
import { useEntries } from '@/lib/swr-hooks'
import { useState } from 'react'

import Button from '@/components/button'
import MyPage from '@/components/my-page'
import Entries from '@/components/entries'
import MapWithEntries from '@/components/maps/map-with-entries'
import SearchInputField from '@/components/search-input-field'

export default function Home() {

  const { entries, isLoading } = useEntries()

  const [searchTerm, setSearchTerm] = useState("");
  const [searchCat, setSearchCat] = useState("name");

  const filterByCatAndTerm = entries?.filter(entry =>
    entry?.[searchCat]?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const results = !searchTerm
    ? entries
    : filterByCatAndTerm
  
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
        <div className="w-1/3 px-2 py-2 bg-blue-400 overflow-auto rounded-md flex flex-col">

          <SearchInputField onChange={setSearchTerm} />

          <div className="flex items-center gap-4 mt-2 mb-4" onChange={event => setSearchCat(event.target.value)}>
            <label className="inline-flex items-center">
              <input type="radio" name="searchCat" className="form-radio h-5 w-5 text-blue-600" defaultChecked value="name"/>
              <span className="ml-2 text-white font-semibold tracking-wide">Nazwa</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="searchCat" className="form-radio h-5 w-5 text-blue-600" value="type"/>
              <span className="ml-2 text-white font-semibold tracking-wide">Kategoria</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="searchCat" className="form-radio h-5 w-5 text-blue-600" value="city"/>
              <span className="ml-2 text-white font-semibold tracking-wide">Miasto</span>
            </label>
          </div>

          {isLoading &&
            <h1 className="text-white text-center text-2xl m-auto">Ładowanie...</h1>
          }

          {!isLoading &&
            <Entries entries={results} />
          }

        </div>

        <div className="w-2/3 px-2 py-4 bg-blue-400 text-center rounded-md">
          {!isLoading &&
            <MapWithEntries entries={results} />
          }
        </div>
      </div>

    </MyPage>
  )
}
