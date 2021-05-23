export default function SearchInputField({ onChange }) {

  return (
    <div className="p-2 rounded bg-white cursor-pointer shadow-md flex flex-row items-center justify-between">
      <input
        id="searchPlace"
        className="text-lg font-medium text-gray-500 leading-relaxed appearance-none outline-none"
        type="text"
        name="searchPlace"
        placeholder="Szukaj"
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
      />
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>

  )
}