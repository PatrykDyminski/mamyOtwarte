import Link from "next/link";

export default function Entries({ entries }) {
  if (entries) {
    return (
      <div className="flex-grow">
        {entries.map((e) => (
          <Link as={`/place/${e.slug}`} href={`/place/${e.slug}`} key={e.name} >
            <div className="py-2 rounded bg-blue-400 mb-2 text-white cursor-pointer">
              <h2 className="text-lg font-semibold">{e.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    )
  } else {
    return null
  }
}