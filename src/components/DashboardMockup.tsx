const traceEvents = [
  {
    time: '10:15:23',
    type: 'source.read',
    detail: 'customer.message',
    status: 'untrusted',
    tone: 'text-red-300 bg-red-400/10',
  },
  {
    time: '10:15:24',
    type: 'rag.retrieve',
    detail: 'kb://refund.policy.v2',
    status: 'retrieved',
    tone: 'text-green-300 bg-green-400/10',
  },
  {
    time: '10:15:25',
    type: 'tool.call',
    detail: 'crm.refund.create',
    status: 'review',
    tone: 'text-yellow-300 bg-yellow-400/10',
  },
  {
    time: '10:15:26',
    type: 'policy.evaluate',
    detail: 'financial_action_high_risk',
    status: 'high risk',
    tone: 'text-red-300 bg-red-400/10',
  },
  {
    time: '10:15:27',
    type: 'decision',
    detail: 'BLOCK',
    status: 'blocked',
    tone: 'text-red-300 bg-red-400/10',
  },
]

const riskSignals = [
  {
    label: 'Source trust',
    value: 'Low',
  },
  {
    label: 'Action type',
    value: 'Financial',
  },
  {
    label: 'Policy',
    value: 'High-risk refund',
  },
]

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-blue-600/20 blur-3xl" />

      <div className="enterprise-panel-dark relative overflow-hidden rounded-[2rem] bg-slate-900/90 p-3 backdrop-blur">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950">
          <div className="console-bar flex items-center justify-between px-5 py-4">
            <div>
              <p className="font-mono-accent text-xs uppercase tracking-[0.18em] text-cyan-300">
                Live action trace
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                Agent Action Overview
              </h3>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Live
            </div>
          </div>

          <div className="grid gap-4 p-5 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-300">
                  Event Trace
                </p>
                <span className="font-mono-accent text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  trc_8f3a...7c2e
                </span>
              </div>

              <div className="space-y-3">
                {traceEvents.map((event) => (
                  <div
                    key={`${event.time}-${event.type}`}
                    className="grid grid-cols-[58px_1fr_auto] items-center gap-3 text-xs"
                  >
                    <span className="font-mono-accent text-slate-500">
                      {event.time}
                    </span>

                    <div className="min-w-0">
                      <p className="truncate font-mono text-slate-200">
                        {event.type}
                      </p>
                      <p className="truncate text-slate-500">{event.detail}</p>
                    </div>

                    <span
                      className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase ${event.tone}`}
                    >
                      {event.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-medium text-slate-300">
                  Risk Score
                </p>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-6xl font-bold tracking-tight text-white">
                      92
                    </p>
                    <p className="mt-1 text-sm font-medium text-red-300">
                      High risk
                    </p>
                  </div>

                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-[10px] border-slate-800 border-r-red-400 border-t-red-400">
                    <span className="font-mono-accent text-xs text-slate-400">
                      /100
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-medium text-slate-300">
                  Policy Decision
                </p>

                <div className="mt-4 rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                  <p className="font-mono-accent text-xs uppercase tracking-[0.16em] text-red-300">
                    Blocked
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Untrusted source attempted to trigger a high-value financial
                    action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {riskSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="font-mono-accent text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 left-6 hidden rounded-2xl border border-cyan-300/20 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur md:block">
        <p className="font-mono-accent text-[10px] uppercase tracking-[0.16em] text-cyan-300">
          Why-chain stored
        </p>
      </div>
    </div>
  )
}

export default DashboardMockup