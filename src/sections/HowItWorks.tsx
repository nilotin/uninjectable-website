import SectionHeader from '../components/SectionHeader'
import EyeCore from '../components/EyeCore'

const steps = [
  {
    number: '01',
    title: 'Capture context',
    description:
      'The agent reads messages, documents, customer records, or internal system context.',
    tag: 'source.read',
  },
  {
    number: '02',
    title: 'Detect action intent',
    description:
      'The agent attempts to call an API, update a record, issue a refund, or trigger a workflow.',
    tag: 'tool.call',
  },
  {
    number: '03',
    title: 'Evaluate risk',
    description:
      'The action is scored using policy rules, source trust, action type, and contextual signals.',
    tag: 'risk.score',
  },
  {
    number: '04',
    title: 'Apply policy',
    description:
      'The policy engine returns allow, review, or block using deterministic decision logic.',
    tag: 'policy.evaluate',
  },
  {
    number: '05',
    title: 'Route review',
    description:
      'Sensitive or high-risk actions can be routed to human reviewers before execution.',
    tag: 'human.review',
  },
  {
    number: '06',
    title: 'Store audit trail',
    description:
      'Every source, decision, action, and explanation is preserved for later inspection.',
    tag: 'audit.log',
  },
]

const policySignals = [
  { label: 'Action', value: 'issue_refund' },
  { label: 'Amount', value: '$5,000' },
  { label: 'Source Trust', value: 'Untrusted' },
  { label: 'Policy', value: 'block_high_risk_refund' },
  { label: 'Risk Score', value: '105' },
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
          title="Trace. Score. Decide. Explain."
          description="Uninjectable sits between AI agents and business tools, turning every important action into a visible, policy-backed, and explainable decision."
          variant="dark"
        />

                <div className="mt-14 grid gap-5 lg:hidden">
          {steps.map((step) => (
            <div key={step.number} className="pixel-card-dark bg-[#0f1b2d] p-6">
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
              High-risk refund attempt
            </h3>
          </div>

          <span className="hidden border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs font-medium text-red-300 sm:block">
            Blocked
          </span>
        </div>

        <div className="grid gap-5 p-4 md:gap-8 md:p-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="pixel-card-dark bg-[#111c2d] p-5 md:p-6">
            <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4fa3]">
              Decision chain
            </p>

            <h3 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-tight text-white md:text-4xl">
              A refund action gets stopped before execution.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
              The agent attempts to issue a high-value refund based on an untrusted
              customer message. Uninjectable detects the risky chain, evaluates the
              policy, and blocks the action before it reaches the CRM.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {[
                'Untrusted source',
                'Refund policy',
                'CRM tool call',
                'Risk evaluated',
                'Blocked',
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

              <span className="border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs font-medium text-red-300">
                Block
              </span>
            </summary>

            <div className="mt-5 space-y-3">
              {policySignals.map((signal) => (
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

            <details className="mt-5 border border-red-400/20 bg-red-400/10 p-4 md:block" open>
              <summary className="cursor-pointer list-none font-mono-accent text-xs font-semibold uppercase tracking-[0.16em] text-red-300">
                Reason
              </summary>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                Untrusted source attempted to trigger a high-value financial action
                over the approved policy limit.
              </p>
            </details>

            <details className="mt-4 border border-green-400/20 bg-green-400/10 p-4 md:block" open>
              <summary className="cursor-pointer list-none font-mono-accent text-xs font-semibold uppercase tracking-[0.16em] text-green-300">
                Audit trail stored
              </summary>

              <p className="mt-2 font-mono text-xs leading-6 text-slate-300">
                trace_id: trc_8f3a...7c2e
                <br />
                actor: support_agent_01
                <br />
                decision: BLOCK
                <br />
                status: logged
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