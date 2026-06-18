import { useEffect, useId, useRef } from 'react'

function EyeCore() {
  const reactId = useId()
  const safeId = reactId.replace(/:/g, '')
  const clipId = `orbit-eye-clip-${safeId}`
  const scleraId = `orbit-eye-sclera-${safeId}`
  const irisId = `orbit-eye-iris-${safeId}`

  const eyeRef = useRef<HTMLDivElement | null>(null)
  const irisRef = useRef<SVGGElement | null>(null)
  const frameRef = useRef<number | null>(null)

  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  const eyePath =
    'M20 60 C50 28 82 18 120 18 C158 18 190 28 220 60 C190 92 158 102 120 102 C82 102 50 92 20 60 Z'

  const upperEyeLine =
    'M20 60 C50 28 82 18 120 18 C158 18 190 28 220 60'

  useEffect(() => {
    function updateTarget(clientX: number, clientY: number) {
      if (!eyeRef.current) return

      const rect = eyeRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const dx = clientX - centerX
      const dy = clientY - centerY

      const angle = Math.atan2(dy, dx)
      const distance = Math.min(16, Math.hypot(dx, dy) * 0.075)

      targetRef.current = {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      }
    }

    function resetTarget() {
      targetRef.current = { x: 0, y: 0 }
    }

    function animate() {
      const current = currentRef.current
      const target = targetRef.current

      current.x += (target.x - current.x) * 0.13
      current.y += (target.y - current.y) * 0.13

      if (irisRef.current) {
        irisRef.current.setAttribute(
          'transform',
          `translate(${current.x.toFixed(2)} ${current.y.toFixed(2)})`,
        )
      }

      frameRef.current = window.requestAnimationFrame(animate)
    }

    function handlePointerMove(event: globalThis.PointerEvent) {
      updateTarget(event.clientX, event.clientY)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('blur', resetTarget)
    document.addEventListener('mouseleave', resetTarget)

    frameRef.current = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('blur', resetTarget)
      document.removeEventListener('mouseleave', resetTarget)

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <div ref={eyeRef} className="orbit-eye-core" aria-hidden="true">
      <div className="orbit-eye-aura" />

      <svg
        className="orbit-eye-svg"
        viewBox="0 0 240 120"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={clipId}>
            <path d={eyePath} />
          </clipPath>

          <radialGradient id={scleraId} cx="50%" cy="45%" r="62%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="58%" stopColor="#eef3fa" />
            <stop offset="100%" stopColor="#cfd8e6" />
          </radialGradient>

          <radialGradient id={irisId} cx="38%" cy="34%" r="72%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="42%" stopColor="#256f93" />
            <stop offset="100%" stopColor="#10263a" />
          </radialGradient>
        </defs>

        <g clipPath={`url(#${clipId})`} className="orbit-eye-blink-group">
          <path
            d={eyePath}
            fill={`url(#${scleraId})`}
          />

          <path
            d="M20 0 L220 0 L220 52 C188 36 154 28 120 28 C86 28 52 36 20 52 Z"
            fill="rgba(15, 23, 42, 0.08)"
          />

          <g ref={irisRef}>
            <circle
              cx="120"
              cy="60"
              r="30"
              fill={`url(#${irisId})`}
              stroke="rgba(125, 211, 252, 0.3)"
              strokeWidth="2"
              className="orbit-eye-iris-svg"
            />

            <circle cx="120" cy="60" r="12" fill="#020617" />

            <circle
              cx="108"
              cy="47"
              r="6"
              fill="rgba(255, 255, 255, 0.94)"
            />
          </g>
        </g>

        <path
          d={upperEyeLine}
          fill="none"
          stroke="rgba(248, 250, 252, 0.96)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default EyeCore