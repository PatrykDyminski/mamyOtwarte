import Link from "next/link";

export default function Entries({ entries }) {

  if (entries) {
    return (
      <div className="flex-grow">
        {entries.map((e) => (
          <Link as={`/place/${e.slug}`} href={`/place/${e.slug}`} key={e.name} >
            <div className="p-2 rounded bg-white mb-2 cursor-pointer shadow-md">
              <h2 className="text-lg font-medium text-gray-700 leading-relaxed">{e.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    )
  } else {
    return null
  }
}