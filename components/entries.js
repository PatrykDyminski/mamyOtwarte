export default function Entries({ entries }) {
  if (entries) {
    return (
      <div className="flex-grow">
        {entries.map((e) => (
          <div key={e.name} className="py-2 rounded bg-blue-400 mb-2 text-white">
            <h2>{e.name}-{e.type}</h2>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}