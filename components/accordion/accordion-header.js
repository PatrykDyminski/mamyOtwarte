export default function AccordionHeader({ children, ...rest }) {
  return (
    <div role="button" {...rest} className="block focus:outline-none bg-blue-500 text-white border-b my-2 p-3 rounded shadow-md">
      {children}
    </div>
  )
}