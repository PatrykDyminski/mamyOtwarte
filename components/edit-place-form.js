import { useState } from 'react'
import Router from 'next/router'

import Button from '@/components/button'

export default function EditPlaceForm({ place }) {

  const [name, setName] = useState(place.name)
  const [description, setDescription] = useState(place.description)
  const [telephone, setTelephone] = useState(place.telephone)
  const [website, setWebsite] = useState(place.website)
  const [city, setCity] = useState(place.city)
  const [street, setStreet] = useState(place.street)
  const [streetnr, setStreetnr] = useState(place.streetnr)
  const [lat, setLat] = useState(place.lat)
  const [lng, setLng] = useState(place.lng)
  const [verified, setVerified] = useState(place.verified)
  const [slug, setSlug] = useState(place.slug)
  const [type, setType] = useState(place.type)
  const [submitting, setSubmitting] = useState(false)

  const inputStyle = "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 text-lg font-medium leading-relaxed focus:outline-none focus:shadow-outline"
  const labelStyle = "block text-gray-100 font-semibold mb-1"
  const divStyle = "mt-2"

  async function submitHandler(e) {
    setSubmitting(true)
    e.preventDefault()
    const updatedEntry = JSON.stringify({
      name,
      description,
      telephone,
      website,
      city,
      street,
      streetnr,
      lat,
      lng,
      verified,
      slug,
      type,
    });

    try {
      const res = await fetch('/api/edit-place', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: updatedEntry,
      })
      setSubmitting(false)
      const json = await res.json()
      if (!res.ok){
        throw Error(json.message)
      } else {
        //Router.push('/')
      }
    } catch (e) {
      throw Error(e.message)
    }
  }

  return (
    <form 
      onSubmit={submitHandler}
      className="flex gap-4"
    >
      <div className="px-2 py-2 bg-blue-400 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
        <div className={divStyle}>
          <label htmlFor="name">
            <h3 className={labelStyle}>Nazwa działalności</h3>
          </label>
          <input
            id="name"
            className={inputStyle}
            type="text"
            name="name"
            value={name}
            placeholder="Półka Z ZZOO"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={divStyle}>
          <label htmlFor="telephone">
            <h3 className={labelStyle}>Numer telefonu</h3>
          </label>
          <input
            id="telephone"
            className={inputStyle}
            type="tel"
            pattern="[0-9]{9}"
            name="telephone"
            maxLength={9}
            minLength={9}
            value={telephone}
            placeholder="789665112"
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className={divStyle}>
          <label htmlFor="website">
            <h3 className={labelStyle}>Strona WWW</h3>
          </label>
          <input
            id="website"
            className={inputStyle}
            type="text"
            name="website"
            value={website}
            placeholder="wwww.google.com"
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className={divStyle}>
          <label htmlFor="city">
            <h3 className={labelStyle}>Miasto</h3>
          </label>
          <input
            id="city"
            className={inputStyle}
            type="text"
            name="city"
            value={city}
            placeholder="Wrocław"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className={divStyle}>
          <label htmlFor="street">
            <h3 className={labelStyle}>Ulica</h3>
          </label>
          <input
            id="street"
            className={inputStyle}
            type="text"
            name="street"
            value={street}
            placeholder="Mączna"
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className={divStyle}>
          <label htmlFor="name">
            <h3 className={labelStyle}>Numer Budynku/lokalu</h3>
          </label>
          <input
            id="streetnr"
            className={inputStyle}
            type="text"
            name="streetnr"
            value={streetnr}
            placeholder="99/25"
            onChange={(e) => setStreetnr(e.target.value)}
          />
        </div>
        <div className={divStyle}>
          <label htmlFor="type">
            <h3 className={labelStyle}>Typ</h3>
          </label>
          <input
            id="type"
            className={inputStyle}
            type="text"
            name="type"
            value={type}
            placeholder="Bar"
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className={divStyle}>
          <label htmlFor="verified">
            <h3 className={labelStyle}>Zweryfikowane</h3>
          </label>
          <div className="flex flex-col gap-2" onChange={(e) => e.target.value === "t" ? setVerified(true) : setVerified(false)}>
            <label className="inline-flex items-center">
              <input type="radio" name="verified" className="form-radio h-5 w-5 text-blue-600" value="t" defaultChecked={verified === true}/>
              <span className="ml-2 text-white font-semibold tracking-wide">Tak</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="verified" className="form-radio h-5 w-5 text-blue-600" value="f" defaultChecked={verified === false}/>
              <span className="ml-2 text-white font-semibold tracking-wide">Nie</span>
            </label>
          </div>
        </div>
        <div className={divStyle} className="col-span-3">
          <label htmlFor="description">
            <h3 className={labelStyle}>Opis działalności</h3>
          </label>
          <textarea
            className={inputStyle}
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button disabled={submitting} type="submit" className="m-2">
          {submitting ? 'Zapisywanie ...' : 'Zapisz'}
        </Button>    
      </div>
    </form>
  )
}