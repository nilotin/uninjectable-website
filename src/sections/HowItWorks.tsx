import SectionHeader from '../components/SectionHeader'
import EyeCore from '../components/EyeCore'

const steps = [
  {
    number: '01',
    title: 'Capture intent & provenance',
    description:
      'Capture the relevant source, actor, request, and execution context.',
    tag: 'context.observe',
  },
  {
    number: '02',
    title: 'Resolve capability',
    description:
      'Map the attempted action to its canonical capability identity and authority.',
    tag: 'capability.resolve',
  },
  {
    number: '03',
    title: 'Evaluate stateful policy',
    description:
      'Evaluate explicit policy against current session state, sequence, cumulative effects, and provenance.',
    tag: 'policy.evaluate',
  },
  {
    number: '04',
    title: 'Commit decision & route review',
    description:
      'Allow, review, or block. Human review remains an explicit governance step where required.',
    tag: 'review.commit',
  },
  {
    number: '05',
    title: 'Dispatch with EffectSpec',
    description:
      'Execute an approved action with its expected or permitted effect declared.',
    tag: 'effect.declare',
  },
  {
    number: '06',
    title: 'Verify & settle',
    description:
      'Reconcile the authoritative outcome, persist the provenance graph, and surface remediation if constraints were not satisfied.',
    tag: 'effect.verify',
  },
]

const decisionEvidence = [
  { label: 'Capability', value: 'crm.refund.create' },
  { label: 'Authority', value: 'support.refund ($1,000 limit)' },
  { label: 'Session State', value: '$3,400 cumulative' },
  { label: 'Policy', value: 'refund.supervisor_limit' },
  { label: 'Decision', value: 'REVIEW' },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="dark-subtle-grid bg-slate-950 px-4 py-16 scroll-mt-24 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How it works"
          title="From model intent to verifiable business effect"
          description="Baleena resolves what an agent is trying to do, evaluates deterministic policy against current state, governs execution, and verifies what actually changed."
          variant="dark"
        />

                <div className="mt-8 grid grid-cols-2 gap-3 md:mt-14 md:gap-5 lg:hidden">
          {steps.map((step) => (
            <div key={step.number} className="pixel-card-dark bg-[#0f1b2d] p-3 md:p-6">
              <div className="mb-3 md:mb-6">
                <span className="font-mono-accent inline-flex min-w-9 items-center justify-center border border-[#ff4fa3]/40 bg-[#ff4fa3]/10 px-2 py-1 text-[0.65rem] font-semibold text-[#ff4fa3] md:min-w-14 md:px-3 md:py-2 md:text-xs">
                  {step.number}
                </span>
              </div>

              <h3 className="text-[1rem] font-extrabold leading-tight text-white md:text-2xl">
                {step.title}
              </h3>

              <p className="mt-2 text-[0.72rem] leading-5 text-slate-300 md:mt-4 md:text-base md:leading-8">
                {step.description}
              </p>

              <div className="mt-4 h-[5px] w-14 bg-[#ff4fa3] md:mt-8 md:h-[6px] md:w-20" />
            </div>
          ))}
        </div>

        <div className="orbit-stage mt-20 hidden lg:block">
          <div className="orbit-ring" />

                   <svg
            className="orbit-flow-line"
            viewBox="0 0 1200 760"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="orbit-flow-arrow"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="5"
                orient="auto"
              >
                <path
                  d="M0 0 L10 5 L0 10 Z"
                  fill="rgba(255, 79, 163, 0.72)"
                />
              </marker>
            </defs>

            <path
              className="orbit-flow-path-glow"
              d="
                M 270 165
                C 380 130, 465 130, 545 170
                C 660 225, 775 165, 910 165
                C 1080 170, 1095 430, 920 515
                C 800 575, 660 570, 555 535
                C 430 493, 325 505, 270 560
              "
            />

            <path
              className="orbit-flow-path"
              d="
                M 270 165
                C 380 130, 465 130, 545 170
                C 660 225, 775 165, 910 165
                C 1080 170, 1095 430, 920 515
                C 800 575, 660 570, 555 535
                C 430 493, 325 505, 270 560
              "
            />

            <circle className="orbit-flow-dot orbit-flow-dot-1" r="4" />
            <circle className="orbit-flow-dot orbit-flow-dot-2" r="4" />
            <circle className="orbit-flow-dot orbit-flow-dot-3" r="4" />
          </svg>

          <EyeCore />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`orbit-card orbit-card-${index + 1}`}
            >
              <div className="pixel-card-dark bg-[#0f1b2d] p-6">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="font-mono-accent inline-flex min-w-14 items-center justify-center border border-[#ff4fa3]/40 bg-[#ff4fa3]/10 px-3 py-2 text-xs font-semibold text-[#ff4fa3]">
                    {step.number}
                  </span>

                  <span className="font-mono-accent text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold leading-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  {step.description}
                </p>

                <div className="mt-8 h-[6px] w-20 bg-[#ff4fa3]" />
              </div>
            </div>
          ))}
        </div>

      <div className="pixel-card-dark mt-12 overflow-hidden bg-[#0b1424] text-white md:mt-20">
        <div className="console-bar flex items-center justify-between px-5 py-4">
          <div>
            <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4fa3]">
              Example incident flow
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              Refund request exceeds delegated authority
            </h3>
          </div>

          <span className="hidden border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300 sm:block">
            Review
          </span>
        </div>

        <div className="grid gap-5 p-4 md:gap-8 md:p-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="pixel-card-dark bg-[#111c2d] p-5 md:p-6">
            <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4fa3]">
              Decision chain
            </p>

            <h3 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-tight text-white md:text-4xl">
              A refund request is held for supervisor approval.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
              An AI support agent attempts crm.refund.create for $5,000.
              Baleena resolves the capability, evaluates stateful policy
              against this session&rsquo;s $3,400 in prior refunds, and finds
              the request exceeds the agent&rsquo;s delegated authority — so
              the action is held for review before it reaches the CRM.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {[
                'Capability resolved',
                'Session state checked',
                'Policy evaluated',
                'Authority exceeded',
                'Review required',
              ].map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-slate-950/60 p-3 text-center"
                >
                  <p className="font-mono-accent text-[9px] leading-4 text-slate-300 md:text-[10px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <details className="pixel-card-dark bg-[#111c2d] p-5 md:p-6" open>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4fa3]">
                Policy check
              </p>

              <span className="border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                Review
              </span>
            </summary>

            <div className="mt-5 space-y-3">
              {decisionEvidence.map((signal) => (
                <div
                  key={signal.label}
                  className="grid gap-1 border-b border-white/10 pb-3 last:border-b-0 md:grid-cols-[0.8fr_1fr] md:items-center"
                >
                  <span className="font-mono-accent text-[9px] uppercase tracking-[0.16em] text-slate-500 md:text-[10px]">
                    {signal.label}
                  </span>

                  <span className="font-mono text-xs font-semibold text-slate-200 md:text-sm md:text-right">
                    {signal.value}
                  </span>
                </div>
              ))}
            </div>

            <details className="mt-5 border border-amber-400/20 bg-amber-400/10 p-4 md:block" open>
              <summary className="cursor-pointer list-none font-mono-accent text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                Reason
              </summary>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                The requested $5,000 refund exceeds the agent&rsquo;s $1,000
                delegated authority for this session, and cumulative refunds
                already total $3,400 — supervisor approval is required before
                the action can proceed.
              </p>
            </details>

            <details className="mt-4 border border-green-400/20 bg-green-400/10 p-4 md:block" open>
              <summary className="cursor-pointer list-none font-mono-accent text-xs font-semibold uppercase tracking-[0.16em] text-green-300">
                Provenance graph stored
              </summary>

              <p className="mt-2 font-mono text-xs leading-6 text-slate-300">
                trace_id: trc_8f3a...7c2e
                <br />
                actor: support_agent_01
                <br />
                decision: REVIEW
                <br />
                status: routed_to_supervisor
              </p>
            </details>
          </details>
        </div>
      </div>
      </div>
    </section>
  )
}

export default HowItWorks
