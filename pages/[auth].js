import { useAllEntries } from '@/lib/swr-hooks'
import { useState } from 'react';

import MyPage from '@/components/my-page'
import Accordion from '@/components/accordion/accordion';
import AccordionHeader from '@/components/accordion/accordion-header';
import EditPlaceForm from '@/components/edit-place-form';

const correct = process.env.VERIFY

export default function Home({ a }) {

  const [activeItem, setActiveItem] = useState('');
  const toggleActiveItem = (id) => () => {
    setActiveItem((prevState) => (prevState !== id ? id : ''));
  };

  const { entries, isLoading } = useAllEntries()

  if(a){
    return (
      <MyPage pageTitle='Admin'>
      <div className="flex flex-col text-center items-center my-8">
        <h1 className="text-6xl font-bold">
          Panel Administracyjny
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
                  activeitem={activeItem}
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
                  <div className="bg-blue-400 rounded shadow-md text-white p-3">
                    <EditPlaceForm place={e} />
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
  else {
    return(
      <MyPage pageTitle='Admin'>
        <h1>Niezalogowano</h1>  
      </MyPage>
    )
  }
}

export async function getStaticProps({ params }) {
  if (params.auth == correct) {
    return {
      props: {
        a: true
      },
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ 
      params: { 
        auth: correct 
      } 
    }],
    fallback: false
  }
}