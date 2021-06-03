import Link from 'next/link'
import LoginForm from '@/components/login-form.js'

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
        <LoginForm />
      </div>
    </MyPage>
  )
}