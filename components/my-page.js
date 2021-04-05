import Nav from '@/components/nav.js'
import Footer from '@/components/footer.js'

import Head from 'next/head'

export default function MyPage({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8'/>
        <title>MamyOtwarte | {pageTitle}</title>
        <meta property="og:title" content="Mamy Otwarte" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/icon/K_logo_wob.png" />
      </Head>
      <main className="px-4 py-4 max-w-3xl mx-auto sm:px-6 lg:max-w-4xl lg:px-8 xl:max-w-6xl h-screen ">
        
        
        {children}
        
      </main>
    </>
  )
}