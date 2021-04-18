import { useState } from 'react'
import Router from 'next/router'

import Button from '@/components/button'

export default function NewPlaceForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [telephone, setTelephone] = useState()
  const [website, setWebsite] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [streetnr, setStreetnr] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const inputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  const labelStyle = "block text-gray-700 text-sm font-bold mb-2"

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

  return (
    <form 
      onSubmit={submitHandler}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md container mx-auto"
    >
      <div className="my-4">
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
      <div className="my-4">
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
      <div className="my-4">
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
      <div className="my-4">
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
      <div className="my-4">
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
      <div className="my-4">
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
      <div className="my-4">
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
    </form>
  )
}