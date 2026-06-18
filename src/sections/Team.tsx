import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent, WheelEvent } from 'react'
import SectionHeader from '../components/SectionHeader'
import { teamMembers } from '../data/siteContent'

type TeamMemberCard = {
  type: 'member'
  name: string
  role: string
  description: string
}

type SnapshotCard = {
  type: 'snapshot'
  title: string
  label: string
  description: string
  image: string
}

type CarouselCard = TeamMemberCard | SnapshotCard

type VisibleCard = {
  slot: 'left' | 'center' | 'right'
  card: CarouselCard
}

function Team() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [teamPhotoLoaded, setTeamPhotoLoaded] = useState(true)
  const [dragOffset, setDragOffset] = useState(0)

  const pointerStartX = useRef<number | null>(null)
  const pauseTimeoutRef = useRef<number | null>(null)
  const wheelAccumRef = useRef(0)
  const wheelLockRef = useRef(false)
  const wheelResetTimeoutRef = useRef<number | null>(null)
  const wheelUnlockTimeoutRef = useRef<number | null>(null)

  const cards = useMemo<CarouselCard[]>(
    () => [
      ...teamMembers.map((member) => ({
        type: 'member' as const,
        name: member.name,
        role: member.role,
        description: member.description,
      })),
      {
        type: 'snapshot' as const,
        title: 'Built together',
        label: 'Founding team',
        description:
          'Different strengths, one shared mission: making autonomous AI safer, more observable, and more accountable.',
        image: `${import.meta.env.BASE_URL}team-photo.jpg`,
      },
    ],
    [],
  )

  const previousIndex = (activeIndex - 1 + cards.length) % cards.length
  const nextIndex = (activeIndex + 1) % cards.length

  const visibleCards: VisibleCard[] = [
    {
      slot: 'left',
      card: cards[previousIndex],
    },
    {
      slot: 'center',
      card: cards[activeIndex],
    },
    {
      slot: 'right',
      card: cards[nextIndex],
    },
  ]

  function nextCard() {
    setActiveIndex((current) => (current + 1) % cards.length)
  }

  function previousCard() {
    setActiveIndex((current) => (current - 1 + cards.length) % cards.length)
  }

  function pauseTemporarily() {
    setIsPaused(true)

    if (pauseTimeoutRef.current) {
      window.clearTimeout(pauseTimeoutRef.current)
    }

    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false)
    }, 5200)
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    pointerStartX.current = event.clientX
    setIsPaused(true)

    if (event.currentTarget.setPointerCapture) {
      event.currentTarget.setPointerCapture(event.pointerId)
    }
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (pointerStartX.current === null) return

    const deltaX = event.clientX - pointerStartX.current
    const limitedDelta = Math.max(-120, Math.min(120, deltaX))

    setDragOffset(limitedDelta)
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (pointerStartX.current === null) return

    const deltaX = event.clientX - pointerStartX.current

    if (deltaX > 65) {
      previousCard()
      pauseTemporarily()
    } else if (deltaX < -65) {
      nextCard()
      pauseTemporarily()
    } else {
      setIsPaused(false)
    }

    setDragOffset(0)
    pointerStartX.current = null

    if (
      event.currentTarget.hasPointerCapture &&
      event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  function handlePointerCancel(event: PointerEvent<HTMLDivElement>) {
    setDragOffset(0)
    pointerStartX.current = null
    setIsPaused(false)

    if (
      event.currentTarget.hasPointerCapture &&
      event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  function handlePointerLeave() {
    if (pointerStartX.current !== null) return

    setDragOffset(0)
    setIsPaused(false)
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    const horizontalDelta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.shiftKey
          ? event.deltaY
          : 0

    if (Math.abs(horizontalDelta) < 4) return

    event.preventDefault()
    setIsPaused(true)

    wheelAccumRef.current += horizontalDelta

    const visualOffset = Math.max(
      -90,
      Math.min(90, -wheelAccumRef.current),
    )

    setDragOffset(visualOffset)

    if (wheelResetTimeoutRef.current) {
      window.clearTimeout(wheelResetTimeoutRef.current)
    }

    wheelResetTimeoutRef.current = window.setTimeout(() => {
      wheelAccumRef.current = 0
      setDragOffset(0)

      if (!wheelLockRef.current) {
        setIsPaused(false)
      }
    }, 180)

    if (wheelLockRef.current) return

    if (wheelAccumRef.current > 70) {
      wheelLockRef.current = true
      wheelAccumRef.current = 0
      setDragOffset(0)
      nextCard()
      pauseTemporarily()

      wheelUnlockTimeoutRef.current = window.setTimeout(() => {
        wheelLockRef.current = false
      }, 720)
    }

    if (wheelAccumRef.current < -70) {
      wheelLockRef.current = true
      wheelAccumRef.current = 0
      setDragOffset(0)
      previousCard()
      pauseTemporarily()

      wheelUnlockTimeoutRef.current = window.setTimeout(() => {
        wheelLockRef.current = false
      }, 720)
    }
  }

  function stopCarouselDrag(event: PointerEvent<HTMLButtonElement>) {
    event.stopPropagation()
  }

  useEffect(() => {
    if (isPaused) return

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length)
    }, 5600)

    return () => window.clearInterval(interval)
  }, [isPaused, cards.length])

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        window.clearTimeout(pauseTimeoutRef.current)
      }

      if (wheelResetTimeoutRef.current) {
        window.clearTimeout(wheelResetTimeoutRef.current)
      }

      if (wheelUnlockTimeoutRef.current) {
        window.clearTimeout(wheelUnlockTimeoutRef.current)
      }
    }
  }, [])

  function getInitials(name: string) {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  }

  function getCardKey(card: CarouselCard) {
    return card.type === 'member' ? card.name : card.title
  }

  function renderMemberCard(card: TeamMemberCard) {
    return (
      <div className="pixel-card bg-[#f8fbff] p-8 transition duration-200">
        <div className="pixel-mini-icon mb-6 flex h-16 w-16 items-center justify-center bg-slate-100 text-blue-700">
          <span className="text-lg font-bold">{getInitials(card.name)}</span>
        </div>

        <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-950">
          {card.name}
        </h3>

        <p className="font-mono-accent mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
          {card.role}
        </p>

        <p className="mt-6 text-base leading-8 text-slate-500">
          {card.description}
        </p>

        <div className="mt-8 border-t border-slate-200 pt-5">
          <span className="font-mono-accent text-xs text-slate-400">
            LinkedIn profile
          </span>
        </div>
      </div>
    )
  }

  function renderSnapshotCard(card: SnapshotCard) {
    return (
      <div className="pixel-card bg-[#f8fbff] p-8 transition duration-200">
        <div className="mb-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-slate-950 bg-slate-100">
            {teamPhotoLoaded ? (
              <img
                src={card.image}
                alt="Uninjectable founding team"
                className="h-full w-full object-cover"
                onError={() => setTeamPhotoLoaded(false)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Team photo
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Add image as public/team-photo.jpg
                  </p>
                </div>
              </div>
            )}

            <div className="absolute right-3 top-3 bg-white/90 px-3 py-1 backdrop-blur">
              <span className="font-mono-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-600">
                Snapshot
              </span>
            </div>
          </div>
        </div>

        <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
          {card.label}
        </p>

        <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-950">
          {card.title}
        </h3>

        <p className="mt-5 text-base leading-8 text-slate-500">
          {card.description}
        </p>

        <div className="mt-8 h-[6px] w-20 bg-blue-600" />
      </div>
    )
  }

  function renderCard(card: CarouselCard) {
    if (card.type === 'member') {
      return renderMemberCard(card)
    }

    return renderSnapshotCard(card)
  }

  const carouselStyle = {
    '--team-drag-side': `${dragOffset * 0.35}px`,
    '--team-drag-center': `${dragOffset * 0.45}px`,
    '--team-drag-rotate': `${dragOffset / 18}deg`,
    '--team-drag-center-rotate': `${dragOffset / -24}deg`,
  } as CSSProperties

  return (
    <section
      id="team"
      className="subtle-grid bg-[#eef3fb] px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Team"
          title="Built by a focused founding team"
          description="Uninjectable is being developed by a technical and operational founding team focused on AI governance, enterprise security, and customer validation."
        />

        <div
          className={`team-carousel-stage mt-14 ${
            dragOffset !== 0 ? 'is-dragging' : ''
          }`}
          style={carouselStyle}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={handlePointerLeave}
            onWheel={handleWheel}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
          <div className="team-carousel-sphere" />
          <div className="team-carousel-line" />

            {visibleCards.map(({ slot, card }) => (
              <div
                key={getCardKey(card)}
                className={`team-carousel-card team-carousel-card-${slot}`}
              >
                <div className="team-carousel-card-surface">
                  {renderCard(card)}
                </div>
              </div>
            ))}

          <div className="team-carousel-nav">
            <button
              type="button"
              onPointerDown={stopCarouselDrag}
              onPointerUp={stopCarouselDrag}
              onClick={(event) => {
                event.stopPropagation()
                previousCard()
                pauseTemporarily()
              }}
              className="team-carousel-nav-button team-carousel-nav-button-left"
              aria-label="Show previous team member"
            >
              <span aria-hidden="true">←</span>
              <span className="hidden sm:inline">Prev</span>
            </button>

            <button
              type="button"
              onPointerDown={stopCarouselDrag}
              onPointerUp={stopCarouselDrag}
              onClick={(event) => {
                event.stopPropagation()
                nextCard()
                pauseTemporarily()
              }}
              className="team-carousel-nav-button team-carousel-nav-button-right"
              aria-label="Show next team member"
            >
              <span className="hidden sm:inline">Next</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="team-carousel-dots">
            {cards.map((_, index) => (
              <button
                type="button"
                key={`team-dot-${index}`}
                onPointerDown={stopCarouselDrag}
                onPointerUp={stopCarouselDrag}
                onClick={(event) => {
                  event.stopPropagation()
                  setActiveIndex(index)
                  pauseTemporarily()
                }}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex
                    ? 'bg-[#ff4fa3]'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Show team card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team