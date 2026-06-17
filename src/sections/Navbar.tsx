import { useState } from 'react'
import Button from '../components/Button'
import { navItems } from '../data/siteContent'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" onClick={closeMenu} className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/40 bg-blue-500/10 text-blue-400">
            U
          </div>

          <span className="text-lg font-bold text-white">Uninjectable</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#contact">Request Demo</Button>
        </div>

        <button
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <Button href="#contact" onClick={closeMenu}>
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar