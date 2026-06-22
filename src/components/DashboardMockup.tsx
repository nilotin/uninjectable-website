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
  { label: 'Source trust', value: 'Low' },
  { label: 'Action type', value: 'Financial' },
  { label: 'Policy', value: 'High-risk refund' },
]

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-none bg-blue-600/20 blur-3xl md:-inset-6" />

      <div className="enterprise-panel-dark relative overflow-hidden rounded-none bg-slate-900/90 p-2 backdrop-blur md:p-3">
        <div className="rounded-none border border-white/10 bg-slate-950">
          <div className="console-bar flex items-center justify-between px-4 py-3 md:px-5 md:py-4">
            <div>
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.16em] text-cyan-300 md:text-xs md:tracking-[0.18em]">
                Live action trace
              </p>
              <h3 className="mt-1 text-base font-semibold text-white md:text-lg">
                Agent Action Overview
              </h3>
            </div>

            <div className="hidden items-center gap-2 rounded-none border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300 sm:flex">
              <span className="h-1.5 w-1.5 rounded-none bg-green-400" />
              Live
            </div>
          </div>

          <div className="grid gap-3 p-3 md:gap-4 md:p-5 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-none border border-white/10 bg-white/[0.04] p-3 md:p-5">
              <div className="mb-4 flex items-center justify-between gap-3 md:mb-5">
                <p className="text-xs font-medium text-slate-300 md:text-sm">
                  Event Trace
                </p>
                <span className="font-mono-accent text-[9px] uppercase tracking-[0.14em] text-slate-500 md:text-[10px] md:tracking-[0.16em]">
                  trc_8f3a...7c2e
                </span>
              </div>

              <div className="space-y-2 md:space-y-3">
                {traceEvents.map((event) => (
                  <div
                    key={`${event.time}-${event.type}`}
                    className="grid grid-cols-[44px_1fr] gap-2 text-[10px] md:grid-cols-[58px_1fr_auto] md:items-center md:gap-3 md:text-xs"
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
                      className={`col-span-2 w-fit rounded-none px-2 py-1 text-[9px] font-semibold uppercase md:col-span-1 md:text-[10px] ${event.tone}`}
                    >
                      {event.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 md:space-y-4">
              <div className="rounded-none border border-white/10 bg-white/[0.04] p-3 md:p-5">
                <p className="text-xs font-medium text-slate-300 md:text-sm">
                  Risk Score
                </p>

                <div className="mt-4 flex items-end justify-between md:mt-5">
                  <div>
                    <p className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                      92
                    </p>
                    <p className="mt-1 text-xs font-medium text-red-300 md:text-sm">
                      High risk
                    </p>
                  </div>

                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-slate-800 border-r-red-400 border-t-red-400 md:h-24 md:w-24 md:border-[10px]">
                    <span className="font-mono-accent text-[10px] text-slate-400 md:text-xs">
                      /100
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-none border border-white/10 bg-white/[0.04] p-3 md:p-5">
                <p className="text-xs font-medium text-slate-300 md:text-sm">
                  Policy Decision
                </p>

                <div className="mt-3 rounded-none border border-red-400/20 bg-red-400/10 p-3 md:mt-4 md:p-4">
                  <p className="font-mono-accent text-[10px] uppercase tracking-[0.16em] text-red-300 md:text-xs">
                    Blocked
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-300 md:text-sm md:leading-6">
                    Untrusted source attempted to trigger a high-value financial
                    action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 p-3 md:p-5">
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {riskSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-none border border-white/10 bg-white/[0.04] p-3 md:p-4"
                >
                  <p className="font-mono-accent text-[8px] uppercase tracking-[0.14em] text-slate-500 md:text-[10px] md:tracking-[0.16em]">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-white md:text-sm">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 left-6 hidden rounded-none border border-cyan-300/20 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur md:block">
        <p className="font-mono-accent text-[10px] uppercase tracking-[0.16em] text-cyan-300">
          Why-chain stored
        </p>
      </div>
    </div>
  )
}

export default DashboardMockup