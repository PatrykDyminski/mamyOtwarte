import Link from 'next/link'

import MyPage from '@/components/my-page'

export default function Login() {

  return (
    <MyPage pageTitle='Admin'>
      <div className="flex flex-col text-center items-center my-8">
        <h1 className="text-6xl font-bold">
          Zaloguj się
        </h1>
      </div>
      <div className="max-w-md mx-auto my-16">
        <form className="flex flex-col" method="POST" action="#">
          <div className="mb-6 pt-3 rounded bg-gray-200">
            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
            <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
          </div>
          <div className="mb-6 pt-3 rounded bg-gray-200">
            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
            <input type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Zaloguj</button>
        </form>
      </div>
    </MyPage>
  )
}