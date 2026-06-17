import SectionHeader from '../components/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Agent reads data',
    description:
      'The agent reads user messages, tickets, documents, or internal system context.',
    tag: 'source.read',
  },
  {
    number: '02',
    title: 'Agent calls a tool',
    description:
      'The agent attempts to call an API, update a record, issue a refund, or trigger a workflow.',
    tag: 'tool.call',
  },
  {
    number: '03',
    title: 'Uninjectable scores risk',
    description:
      'The action is evaluated using policy rules, source trust, action type, and contextual signals.',
    tag: 'risk.score',
  },
  {
    number: '04',
    title: 'Policy decides',
    description:
      'The policy engine returns allow, review, or block based on deterministic rules.',
    tag: 'policy.evaluate',
  },
  {
    number: '05',
    title: 'Human reviews if needed',
    description:
      'Sensitive or high-risk actions can be routed to the right reviewer before execution.',
    tag: 'human.review',
  },
  {
    number: '06',
    title: 'Audit trail is stored',
    description:
      'Every source, decision, action, and explanation is preserved for later inspection.',
    tag: 'audit.log',
  },
]

const policySignals = [
  {
    label: 'Action',
    value: 'issue_refund',
  },
  {
    label: 'Amount',
    value: '$5,000',
  },
  {
    label: 'Source Trust',
    value: 'Untrusted',
  },
  {
    label: 'Policy',
    value: 'block_high_risk_refund',
  },
  {
    label: 'Risk Score',
    value: '105',
  },
]

const decisions = [
  {
    title: 'Allow',
    description: 'Low-risk action within policy.',
    color: 'border-[#7cff7a] text-[#7cff7a]',
    action: 'AUTO PROCEED',
  },
  {
    title: 'Review',
    description: 'Requires human approval.',
    color: 'border-[#ffd84d] text-[#ffd84d]',
    action: 'SEND TO REVIEW',
  },
  {
    title: 'Block',
    description: 'High-risk action blocked by policy.',
    color: 'border-[#ff4d57] text-[#ff4d57]',
    action: 'ACTION BLOCKED',
  },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="dark-pixel-grid bg-[#050a26] px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How it works"
          title="Trace. Score. Decide. Explain."
          description="Uninjectable sits between AI agents and business tools, turning every important action into a visible, policy-backed, and explainable decision."
          variant="dark"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="retro-panel-dark relative overflow-hidden bg-[#071033] p-6"
            >
              <div className="absolute right-4 top-4 font-pixel text-[10px] text-[#35d6ff]/60">
                {step.tag}
              </div>

              <div className="mb-5 inline-flex border-2 border-[#35d6ff] bg-[#050a26] px-3 py-2 shadow-[3px_3px_0_rgba(53,214,255,0.35)]">
                <span className="font-pixel text-xs text-[#35d6ff]">
                  STEP {step.number}
                </span>
              </div>

              <h3 className="text-xl font-black uppercase text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#dfe9ff]">
                {step.description}
              </p>

              <div className="mt-6 h-1 w-16 bg-[#ff4fa3]" />
            </div>
          ))}
        </div>

        <div className="retro-panel-dark scanline mt-20 overflow-hidden bg-[#071033] text-white">
          <div className="retro-window-bar flex items-center justify-between px-4 py-2">
            <span className="font-pixel text-xs">EXAMPLE INCIDENT FLOW</span>
            <span className="font-pixel text-[10px] text-[#7cff7a]">
              LIVE POLICY CHECK
            </span>
          </div>

          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <div className="retro-panel bg-[#f8fbff] p-5 text-slate-950">
                <div className="mb-5 flex items-center justify-between border-b-2 border-slate-950 pb-3">
                  <p className="font-pixel text-xs text-[#123cbe]">
                    AGENT INCIDENT REPORT
                  </p>

                  <span className="font-pixel bg-[#ff4d57] px-2 py-1 text-[10px] text-white">
                    BLOCKED
                  </span>
                </div>

                <h3 className="text-3xl font-black uppercase leading-tight">
                  A refund action gets stopped before execution.
                </h3>

                <p className="mt-4 leading-7 text-slate-700">
                  The agent attempts to issue a high-value refund based on an
                  untrusted customer message. Uninjectable detects the risky
                  chain, evaluates the policy, and blocks the action before it
                  reaches the CRM.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-5">
                  {[
                    'Untrusted Source',
                    'Refund Policy Retrieved',
                    'CRM Tool Called',
                    'Risk Evaluated',
                    'Decision: Block',
                  ].map((item, index) => (
                    <div key={item} className="relative">
                      <div className="border-2 border-[#123cbe] bg-white p-3 text-center shadow-[3px_3px_0_#101936]">
                        <p className="font-pixel text-[9px] leading-4 text-slate-950">
                          {item}
                        </p>
                      </div>

                      {index !== 4 && (
                        <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 bg-slate-950 sm:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {decisions.map((decision) => (
                  <div
                    key={decision.title}
                    className={`border-2 bg-[#050a26] p-5 text-center ${decision.color}`}
                  >
                    <p className="font-pixel text-sm">{decision.title}</p>

                    <p className="mt-2 min-h-10 text-xs leading-5 text-slate-300">
                      {decision.description}
                    </p>

                    <p className="font-pixel mt-4 text-[10px]">
                      {decision.action}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="retro-panel bg-white p-5 text-slate-950">
              <div className="mb-5 flex items-center justify-between border-b-2 border-slate-950 pb-3">
                <p className="font-pixel text-xs text-[#ff4fa3]">
                  POLICY CHECK
                </p>

                <span className="border-2 border-[#ff4d57] bg-[#ff4d57]/10 px-2 py-1 font-pixel text-[10px] text-[#ff4d57]">
                  BLOCK
                </span>
              </div>

              <div className="space-y-4">
                {policySignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3 last:border-b-0"
                  >
                    <span className="font-pixel text-[10px] text-[#123cbe]">
                      {signal.label}
                    </span>

                    <span className="font-mono text-sm font-bold text-slate-800">
                      {signal.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-2 border-[#ff4d57] bg-[#ff4d57]/10 p-4">
                <p className="font-pixel text-xs text-[#ff4d57]">REASON</p>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Untrusted source attempted to trigger a high-value financial
                  action over the approved policy limit.
                </p>
              </div>

              <div className="mt-5 border-2 border-slate-950 bg-[#071033] p-4 text-white">
                <p className="font-pixel text-xs text-[#7cff7a]">
                  AUDIT TRAIL STORED
                </p>

                <p className="mt-2 font-mono text-xs leading-6 text-[#dfe9ff]">
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