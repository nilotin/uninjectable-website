import { useState } from 'react'
import Button from '../components/Button'
import { navItems } from '../data/siteContent'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-2 border-slate-950 bg-[#dfe9ff]/95 backdrop-blur">
      <div className="border-b border-white/70 bg-[#071033] px-3 py-1 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-[10px] md:text-xs">
          <span className="font-pixel">Uninjectable — AI Runtime Governance</span>

          <div className="hidden items-center gap-3 md:flex">
            <span className="font-pixel text-[#7cff7a]">SYSTEM ONLINE</span>
            <span className="text-slate-300">v0.1 beta</span>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" onClick={closeMenu} className="flex items-center gap-3">
          <div className="retro-panel flex h-10 w-10 items-center justify-center bg-[#071033] text-[#35d6ff]">
            <span className="font-pixel text-sm">U</span>
          </div>

          <div>
            <span className="block text-xl font-black uppercase tracking-tight text-slate-950">
              Uninjectable
            </span>
            <span className="font-pixel hidden text-[10px] text-[#123cbe] sm:block">
              Trace. Explain. Control.
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="border-2 border-slate-950 bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-950 shadow-[3px_3px_0_#101936] transition hover:-translate-y-0.5 hover:bg-[#edf4ff]"
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
          className="border-2 border-slate-950 bg-white px-4 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0_#101936] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t-2 border-slate-950 bg-[#edf4ff] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="border-2 border-slate-950 bg-white px-4 py-3 text-sm font-black uppercase text-slate-950 shadow-[3px_3px_0_#101936]"
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