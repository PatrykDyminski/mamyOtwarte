import { useState } from 'react'
import Router from 'next/router'

import Button from '@/components/button'
import MapForForm from './map-for-form'

export default function NewPlaceForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [telephone, setTelephone] = useState()
  const [website, setWebsite] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [streetnr, setStreetnr] = useState('')
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const inputStyle = "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 text-lg font-medium leading-relaxed focus:outline-none focus:shadow-outline"
  const labelStyle = "block text-gray-100 font-semibold mb-1"
  const divStyle = "mt-2"

  async function submitHandler(e) {
    setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('/api/new-place', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          telephone,
          website,
          city,
          street,
          streetnr,
          lat,
          lng,
        }),
      })
      setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      Router.push('/')
    } catch (e) {
      //throw Error(e.message)
    }
  }

  async function onMapClick(e){
    setLat(e.latLng.lat())
    setLng(e.latLng.lng())
  }

  return (
    <form 
      onSubmit={submitHandler}
      className="flex overflow-hidden h-4/6 gap-4"
    >
      <div className="w-1/3 px-2 py-2 bg-blue-400 overflow-auto rounded-md flex flex-col">
        <div className="">
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
        <Button disabled={submitting} type="submit">
          {submitting ? 'Zapisywanie ...' : 'Zapisz'}
        </Button>
      </div>

      <div className="w-2/3">
        <label htmlFor="map">
          <h3 className="block text-black font-semibold mb-1">Wybierz lokalizację</h3>
        </label>
        <MapForForm
          onMapClick={onMapClick}
        />
      </div>
    </form>
  )
}