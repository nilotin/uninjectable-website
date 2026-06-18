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
      className="dark-subtle-grid bg-slate-950 px-6 py-24 scroll-mt-24"
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

        <div className="pixel-card-dark mt-20 overflow-hidden bg-[#0b1424] text-white">
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

          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <div className="pixel-card-dark bg-[#111c2d] p-6">
                <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4fa3]">
                  Decision chain
                </p>

                <h3 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white">
                  A refund action gets stopped before execution.
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  The agent attempts to issue a high-value refund based on an
                  untrusted customer message. Uninjectable detects the risky
                  chain, evaluates the policy, and blocks the action before it
                  reaches the CRM.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-5">
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
                      <p className="font-mono-accent text-[10px] leading-4 text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pixel-card-dark bg-[#111c2d] p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4fa3]">
                  Policy check
                </p>

                <span className="border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs font-medium text-red-300">
                  Block
                </span>
              </div>

              <div className="space-y-4">
                {policySignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0"
                  >
                    <span className="font-mono-accent text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      {signal.label}
                    </span>

                    <span className="font-mono text-sm font-semibold text-slate-200">
                      {signal.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border border-red-400/20 bg-red-400/10 p-4">
                <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.16em] text-red-300">
                  Reason
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Untrusted source attempted to trigger a high-value financial
                  action over the approved policy limit.
                </p>
              </div>

              <div className="mt-5 border border-green-400/20 bg-green-400/10 p-4">
                <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.16em] text-green-300">
                  Audit trail stored
                </p>

                <p className="mt-2 font-mono text-xs leading-6 text-slate-300">
                  trace_id: trc_8f3a...7c2e
                  <br />
                  actor: support_agent_01
                  <br />
                  decision: BLOCK
                  <br />
                  status: logged
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks