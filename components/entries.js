import Link from "next/link";

export default function Entries({ entries }) {
  if (entries) {
    return (
      <div className="flex-grow">
        {entries.map((e) => (
          <Link as={`/place/${e.slug}`} href={`/place/${e.slug}`}>
            <div key={e.name} className="py-2 rounded bg-blue-400 mb-2 text-white cursor-pointer">
              <h2>{e.name}-{e.type}</h2>
            </div>
          </Link>
        ))}
      </div>
    )
  } else {
    return null
  }
}