import Link from 'next/link'
import { useEntries } from '@/lib/swr-hooks'
import { useState } from 'react'

import Button from '@/components/button'
import MyPage from '@/components/my-page'
import Entries from '@/components/entries'
import MapWithEntries from '@/components/map-with-entries'
import SearchInputField from '@/components/search-input-field'

export default function Panel() {

  return (
    <MyPage pageTitle='Admin'>
      <div className="flex flex-col text-center items-center my-8">
        <h1 className="text-6xl font-bold">
          Pandel Administracyjny
        </h1>
      </div>
      <div className="">

      </div>

    </MyPage>
  )
}