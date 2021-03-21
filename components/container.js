export default function Container({ className = '', children }) {
  return <div className={'container mx-auto px-8 ' + className}>
    {children}
  </div>
}