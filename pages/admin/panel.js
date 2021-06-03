import Link from 'next/link'
import { useEntries } from '@/lib/swr-hooks'
import { useState, useRef } from 'react';

import Button from '@/components/button'
import MyPage from '@/components/my-page'
import Entries from '@/components/entries'
import MapWithEntries from '@/components/map-with-entries'
import SearchInputField from '@/components/search-input-field'
import Accordion from '@/components/accordion/accordion';
import AccordionHeader from '@/components/accordion/accordion-header';

export default function Panel() {

  const [activeItem, setActiveItem] = useState('');
  const toggleActiveItem = (id) => () => {
    setActiveItem((prevState) => (prevState !== id ? id : ''));
  };

  const { entries, isLoading } = useEntries()

  return (
    <MyPage pageTitle='Admin'>
      <div className="flex flex-col text-center items-center my-8">
        <h1 className="text-6xl font-bold">
          Pandel Administracyjny
        </h1>
      </div>
      <div>

        {isLoading &&
          <h1 className="text-white text-center text-2xl m-auto">Ładowanie...</h1>
        }
        <div className="flex-grow">
          {!isLoading &&
            entries.map((e) => (
              <div key={e.name}>
                <AccordionHeader
                  id={e.slug}
                  activeItem={activeItem}
                  onClick={toggleActiveItem(e.slug)}
                >
                  <div className="">
                    <h2 className="text-lg font-medium leading-relaxed">{e.name}</h2>
                    <div className="flex flex-row justify-between">
                      <h3 className="tracking-wide text-s title-font font-medium ">{e.type} - {e.city}</h3>
                      <h3 className="text-s title-font font-medium ">{e.verified.toString()}</h3>
                    </div>
                  </div>
                </AccordionHeader>
                <Accordion id={e.slug} isOpen={activeItem}>
                  <div className="bg-white rounded shadow-md">
                    {e.city}
                  </div>
                </Accordion>
              </div>
            ))
          }
        </div>
      </div>
    </MyPage>
  )
}
