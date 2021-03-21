import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-accent-2 bg-pwr text-white">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-md lg:text-lg font-bold tracking-tighter leading-tight text-center lg:text-left lg:my-5 lg:w-1/2">
            <Link href="#" passHref={true}>
              <h3 className="cursor-pointer hover:text-blue-600 my-2 lg:my-0">facebook.com/MamyOtwarte</h3>
            </Link>
            <h3 className="my-2 lg:my-0">mamy@otwarte.pl</h3>
          </div>
          <h3 className="text-2xl lg:text-5xl font-bold tracking-tighter leading-tight text-center my-2 lg:my-5 lg:w-1/2">
            #MamyOtwarte
            </h3>
          <div className="text-md lg:text-lg font-bold tracking-tighter leading-tight text-center lg:text-left lg:my-5 lg:w-1/2">
            <h3 className="my-2 lg:my-0">Mamy</h3>
            <h3 className="my-2 lg:my-0">Otwarte</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}