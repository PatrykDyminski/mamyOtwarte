import cn from 'clsx'

export default function Button({
  onClick = console.log,
  className = '',
  children = null,
  type = null,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'bg-blue-600',
        'text-white',
        'p-2',
        'rounded',
        'uppercase',
        'text-sm',
        'font-bold',
        {
          [className]: Boolean(className),
        }
      )}
    >
      {children}
    </button>
  )
}