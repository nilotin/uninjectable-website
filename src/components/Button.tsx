type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

function Button({ children, variant = 'primary' }: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition'

  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20',
    secondary:
      'border border-white/15 bg-white/5 text-white hover:bg-white/10',
  }

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  )
}

export default Button