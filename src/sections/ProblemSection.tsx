import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { problems } from '../data/siteContent'

function ProblemSection() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({})

  function toggleCard(title: string) {
    setFlippedCards((current) => ({
      ...current,
      [title]: !current[title],
    }))
  }

  return (
    <section
      id="product"
      className="subtle-grid bg-[#eef3fb] px-4 py-16 sm:px-6 md:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The problem"
          title="AI agents are moving from answers to actions"
          description="AI agents are starting to read data, call tools, update systems, send messages, and trigger business workflows. But most teams still lack visibility and control over these actions."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {problems.map((problem) => {
            const isFlipped = flippedCards[problem.title]

            return (
              <button
                key={problem.title}
                type="button"
                onClick={() => toggleCard(problem.title)}
                className={`problem-flip-card ${
                  isFlipped ? 'problem-flip-card-active' : ''
                }`}
                aria-label={`Show details for ${problem.title}`}
              >
                <div className="problem-flip-card-inner">
                  <div className="problem-flip-face problem-flip-front pixel-card bg-[#f8fbff]">
                    <div className="problem-flip-icon pixel-mini-icon">
                      <img
                        src={`${import.meta.env.BASE_URL}${problem.icon}`}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>

                    <h3>{problem.title}</h3>

                    <span className="problem-flip-hint">
                      Click to inspect
                    </span>

                    <div className="problem-flip-bar" />
                  </div>

                  <div className="problem-flip-face problem-flip-back pixel-card bg-[#f8fbff]">
                    <p className="problem-flip-eyebrow">Why it matters</p>

                    <h3>{problem.title}</h3>

                    <p className="problem-flip-description">
                      {problem.description}
                    </p>

                    <span className="problem-flip-hint">
                      Click to return
                    </span>

                    <div className="problem-flip-bar" />
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <div className="mt-16 rounded-none bg-white/80 p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.4fr] md:items-center">
            <div>
              <p className="font-mono-accent text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Trust, but verify
              </p>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950">
                Autonomy needs accountability.
              </h3>
            </div>

            <p className="text-lg leading-8 text-slate-600">
              The real challenge is not only whether an AI agent can complete a
              task. The challenge is whether your team can understand, control,
              and explain the action before it affects customers, money, data,
              or operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection