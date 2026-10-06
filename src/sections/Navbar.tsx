import { useEffect, useState } from 'react'
import Button from '../components/Button'
import { navItems } from '../data/siteContent'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? '#product')

  function closeMenu() {
    setIsOpen(false)
  }

  function handleNavClick(href: string) {
    setActiveHref(href)
    closeMenu()
  }

  useEffect(() => {
    function updateActiveFromHash() {
      const currentHash = window.location.hash

      if (!currentHash) {
        setActiveHref(navItems[0]?.href ?? '#product')
        return
      }

      const matchingItem = navItems.find((item) => item.href === currentHash)

      if (matchingItem) {
        setActiveHref(matchingItem.href)
      }
    }

    updateActiveFromHash()

    window.addEventListener('hashchange', updateActiveFromHash)

    return () => {
      window.removeEventListener('hashchange', updateActiveFromHash)
    }
  }, [])

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => {
        const sectionId = item.href.replace('#', '')
        const element = document.getElementById(sectionId)

        return {
          href: item.href,
          element,
        }
      })
      .filter(
        (item): item is { href: string; element: HTMLElement } =>
          item.element !== null,
      )

    if (sectionElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const mostVisibleEntry = visibleEntries[0]

        if (!mostVisibleEntry) return

        const matchingSection = sectionElements.find(
          (item) => item.element === mostVisibleEntry.target,
        )

        if (matchingSection) {
          setActiveHref(matchingSection.href)
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    sectionElements.forEach((item) => {
      observer.observe(item.element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#003459] bg-[#00233d]/95 text-white backdrop-blur-xl">
      <div className="brand-rule" aria-hidden="true" />
      <div className="border-b border-white/10 bg-[#002b4a]/85 px-4 py-1.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-[11px] text-slate-400">
          <span className="font-mono-accent">
            AI Runtime Governance Platform
          </span>

          <div className="hidden items-center gap-2 md:flex">
            <span className="status-dot h-2 w-2 rounded-full bg-green-400" />
            <span className="font-mono-accent text-green-300">
              System online
            </span>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-end justify-between px-4 pt-3 sm:px-6 sm:pt-4">
        <a
          href="/"
          onClick={() => {
            setActiveHref(navItems[0]?.href ?? '#product')
            closeMenu()
          }}
          className="mb-3 flex shrink-0 items-center gap-2 sm:mb-4 sm:gap-3"
        >
          <img
            src={`${import.meta.env.BASE_URL}brand/baleena-tail.png`}
            alt=""
            aria-hidden="true"
            className="h-12 w-auto shrink-0 sm:h-14 md:h-[68px]"
          />

          <div className="hidden min-[375px]:block">
            <img
              src={`${import.meta.env.BASE_URL}brand/baleena-wordmark-light.png`}
              alt="Baleena"
              className="h-6 w-auto max-w-none md:h-7"
            />
            <span className="font-mono-accent mt-1.5 hidden whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-[#4cc9f9]/70 sm:block">
              Resolve · Enforce · Verify
            </span>
          </div>
        </a>

        <div className="hidden items-end xl:flex">
          <div className="file-tab-rail flex items-end">
            {navItems.map((item) => {
              const isActive = activeHref === item.href

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={[
                    'folder-tab relative inline-flex min-w-[112px] items-center justify-center whitespace-nowrap',
                    'border-2 border-b-0 px-5 py-3',
                    'font-mono-accent text-[11px] font-extrabold uppercase tracking-[0.1em]',
                    'transition duration-150',
                    isActive
                      ? 'z-20 translate-y-[2px] border-[#03b7f7]/80 bg-[#00406b] text-white shadow-[0_-2px_10px_rgba(3,183,247,0.08)]'
                      : 'z-10 border-white/15 bg-[#002b4a] text-slate-300 hover:translate-y-[1px] hover:border-[#03b7f7]/45 hover:bg-[#003459] hover:text-white',
                  ].join(' ')}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>

        <div className="mb-4 hidden shrink-0 xl:block">
          <Button href="#contact" onClick={() => handleNavClick('#contact')}>
            Request Demo
          </Button>
        </div>

        <button
          onClick={() => setIsOpen((current) => !current)}
          className="mb-3 shrink-0 border border-white/15 px-3 py-2 text-sm font-medium text-white sm:mb-4 xl:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#00233d] px-6 py-5 xl:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = activeHref === item.href

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={[
                    'border px-3 py-3 text-sm font-semibold transition',
                    isActive
                      ? 'border-[#03b7f7]/70 bg-[#03b7f7]/10 text-white'
                      : 'border-white/10 bg-white/5 text-slate-300 hover:border-[#03b7f7]/40 hover:bg-white/10 hover:text-white',
                  ].join(' ')}
                >
                  {item.label}
                </a>
              )
            })}

            <Button href="#contact" onClick={() => handleNavClick('#contact')}>
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
