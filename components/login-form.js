import { useState } from 'react'
import Router from 'next/router'

import Button from '@/components/button'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function submitHandler(e) {
    setSubmitting(true)
    e.preventDefault()
    try {
      const resp = await fetch('/api/log-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
      setSubmitting(false)
      const j = await resp.json();
      
      if (resp.ok){
        Router.push('../'+j.path)
      }
    } catch (e) {
      //console.log(e.message)
    }
  }
  return (
    <form onSubmit={submitHandler} className="flex flex-col" method="POST" action="../api/log-in">
      <div className="mb-6 pt-3 rounded bg-gray-200">
        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
        <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"   onChange={(e) => setEmail(e.target.value)}/>        
      </div>
      <div className="mb-6 pt-3 rounded bg-gray-200">
        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
        <input type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <Button disabled={submitting} type="submit">
          {submitting ? 'Logowanie ...' : 'Zaloguj'}
        </Button>
    </form>
  )
}