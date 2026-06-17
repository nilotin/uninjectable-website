const traceEvents = [
  {
    time: '10:15:23',
    type: 'source.read',
    detail: 'customer.message',
    status: 'untrusted',
    color: 'text-[#ff4d57]',
  },
  {
    time: '10:15:24',
    type: 'rag.retrieve',
    detail: 'kb://refund.policy.v2',
    status: 'low risk',
    color: 'text-[#7cff7a]',
  },
  {
    time: '10:15:25',
    type: 'tool.call',
    detail: 'crm.refund.create',
    status: 'review',
    color: 'text-[#ffd84d]',
  },
  {
    time: '10:15:26',
    type: 'policy.evaluate',
    detail: 'financial_action_high_risk',
    status: 'high risk',
    color: 'text-[#ff4d57]',
  },
  {
    time: '10:15:27',
    type: 'decision',
    detail: 'BLOCK',
    status: 'blocked',
    color: 'text-[#ff4d57]',
  },
]

const whyChain = [
  'Untrusted Source',
  'Information Retrieved',
  'Tool Called',
  'Policy Evaluation',
  'Decision: Block',
]

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-5 bg-[#35d6ff]/20 blur-3xl" />

      <div className="retro-panel-dark scanline relative overflow-hidden bg-[#071033]">
        <div className="retro-window-bar flex items-center justify-between px-4 py-2">
          <span className="font-pixel text-xs">LIVE ACTION TRACE</span>
          <span className="font-pixel text-[10px] text-[#7cff7a]">
            TRACE ID: trc_8f3a...7c2e • LIVE
          </span>
        </div>

        <div className="grid gap-4 p-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="retro-panel bg-[#f8fbff] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-pixel text-xs text-[#123cbe]">
                AGENT EVENT LOG
              </p>
              <span className="font-pixel bg-[#7cff7a] px-2 py-1 text-[10px] text-slate-950">
                ONLINE
              </span>
            </div>

            <div className="space-y-3">
              {traceEvents.map((event) => (
                <div
                  key={`${event.time}-${event.type}`}
                  className="grid grid-cols-[64px_1fr] gap-3 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="font-pixel text-[10px] text-[#123cbe]">
                    {event.time}
                  </span>

                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-mono text-sm font-bold text-slate-950">
                        {event.type}
                      </p>
                      <span
                        className={`font-pixel text-[9px] uppercase ${event.color}`}
                      >
                        {event.status}
                      </span>
                    </div>

                    <p className="mt-1 font-mono text-xs text-slate-600">
                      {event.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="retro-panel bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-pixel text-xs text-[#ff4fa3]">RISK SCORE</p>
              <span className="border border-slate-950 px-1 text-xs">×</span>
            </div>

            <div className="flex items-end gap-2 border-b-2 border-slate-950 pb-4">
              <span className="text-7xl font-black leading-none text-[#ff4fa3]">
                92
              </span>
              <span className="mb-2 text-2xl font-black text-slate-950">
                / 100
              </span>
            </div>

            <div className="mt-5 space-y-5">
              <div>
                <p className="font-pixel text-xs text-[#ff4fa3]">REASON</p>
                <p className="mt-2 font-mono text-sm text-slate-700">
                  Untrusted source leading to financial action over limit.
                </p>
              </div>

              <div>
                <p className="font-pixel text-xs text-[#ff4fa3]">POLICY</p>
                <p className="mt-2 font-mono text-sm text-slate-700">
                  block_high_risk_refund
                </p>
              </div>

              <div className="border-2 border-[#ff4d57] bg-[#ff4d57]/10 p-3">
                <p className="font-pixel text-xs text-[#ff4d57]">OUTCOME</p>
                <p className="mt-1 text-2xl font-black uppercase text-[#ff4d57]">
                  Blocked
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y-2 border-[#35d6ff]/60 bg-[#edf4ff] p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-pixel text-xs text-[#123cbe]">
              WHY-CHAIN EXPLAINED
            </p>
            <span className="font-pixel text-[10px] text-slate-600">
              causal chain established
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-5">
            {whyChain.map((item, index) => (
              <div key={item} className="relative">
                <div className="border-2 border-[#123cbe] bg-white p-3 text-center shadow-[3px_3px_0_#101936]">
                  <p className="font-pixel text-[10px] leading-4 text-slate-950">
                    {item}
                  </p>
                </div>

                {index !== whyChain.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 bg-slate-950 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 p-4 md:grid-cols-3">
          <div className="border-2 border-[#7cff7a] bg-[#071033] p-4 text-center">
            <p className="font-pixel text-[#7cff7a]">ALLOW</p>
            <p className="mt-2 text-xs text-slate-300">Low risk action.</p>
          </div>

          <div className="border-2 border-[#ffd84d] bg-[#071033] p-4 text-center">
            <p className="font-pixel text-[#ffd84d]">REVIEW</p>
            <p className="mt-2 text-xs text-slate-300">Human approval.</p>
          </div>

          <div className="border-2 border-[#ff4d57] bg-[#071033] p-4 text-center">
            <p className="font-pixel text-[#ff4d57]">BLOCK</p>
            <p className="mt-2 text-xs text-slate-300">Policy enforced.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardMockup