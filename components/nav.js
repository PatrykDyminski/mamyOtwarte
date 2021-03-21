import Link from 'next/link'
import { useState } from "react";

const localPages = [
  { href: '/new-place', label: 'Dodaj działalność' },
]

export default function Nav() {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <div className="">
      <header className="flex text-lg sm:text-2xl md:text-4xl justify-center text-center py-2 md:py-5">
        <Link href='/'>
          <a>Mamy Otwarte</a>
        </Link>
      </header>
      <div className="p-3 flex justify-evenly items-center border-4 border-pwr rounded-lg cursor-pointer md:hidden" onClick={toggle}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </div>
      <nav>
        <div className="hidden md:block">
          <ul className="flex justify-evenly items-center pt-4 pb-4 border-4 border-pwr">
            {localPages.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a className="no-underline p-2 m-2 text-lg lg:text-xl tracking-wider hover:text-pwr">{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <ul className="pt-4 pb-4 text-center text-2xl border-b-4 border-l-4 border-r-4 border-pwr rounded-lg" style={{ display: showMe ? "block" : "none" }}>
            {localPages.map(({ href, label }) => (
              <li key={`${href}${label}`} className="m-2">
                <Link href={href}>
                  <a className="no-underline p-2 tracking-wider hover:text-pwr">{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}