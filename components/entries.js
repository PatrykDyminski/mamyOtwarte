import Link from "next/link";
import { useState } from 'react'

export default function Entries({ entries }) {

  const [searchTerm, setSearchTerm] = useState("");

  const search = (phrase) => setSearchTerm(phrase);
  
  const results = !searchTerm
    ? entries
    : entries.filter(entry =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  if (entries) {
    return (
      <div className="flex-grow">

        <div className="p-2 mb-4 rounded bg-white cursor-pointer shadow-md flex flex-row items-center justify-between">
          <input
            id="searchPlace"
            className="text-lg font-medium text-gray-500 leading-relaxed appearance-none outline-none"
            type="text"
            name="searchPlace"
            value={searchTerm}
            placeholder="Szukaj"
            autoComplete="off"
            onChange={(e) => search(e.target.value)}
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {results.map((e) => (
          <Link as={`/place/${e.slug}`} href={`/place/${e.slug}`} key={e.name} >
            <div className="p-2 rounded bg-white mb-2 cursor-pointer shadow-md">
              <h2 className="text-lg font-medium text-gray-700 leading-relaxed">{e.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    )
  } else {
    return null
  }
}