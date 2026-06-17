const actions = [
  {
    label: 'Allow',
    value: '128',
    className: 'text-emerald-300',
  },
  {
    label: 'Review',
    value: '26',
    className: 'text-yellow-300',
  },
  {
    label: 'Block',
    value: '8',
    className: 'text-red-300',
  },
]

const riskCategories = [
  {
    label: 'Data Exfiltration',
    value: '46%',
    barClassName: 'w-[90%] bg-red-500',
  },
  {
    label: 'Privilege Escalation',
    value: '28%',
    barClassName: 'w-[65%] bg-orange-400',
  },
  {
    label: 'PII Exposure',
    value: '16%',
    barClassName: 'w-[45%] bg-yellow-400',
  },
]

const events = [
  {
    time: '10:42:31',
    label: 'Agent read customer_data.csv',
    status: 'Allow',
    statusClassName: 'bg-emerald-400/10 text-emerald-300',
  },
  {
    time: '10:42:35',
    label: 'Agent called get_customer_tool',
    status: 'Review',
    statusClassName: 'bg-yellow-400/10 text-yellow-300',
  },
  {
    time: '10:42:37',
    label: 'Policy required human review',
    status: 'Review',
    statusClassName: 'bg-yellow-400/10 text-yellow-300',
  },
  {
    time: '10:43:02',
    label: 'Human approved the action',
    status: 'Allow',
    statusClassName: 'bg-emerald-400/10 text-emerald-300',
  },
]

const auditTrail = [
  'SupportAgent v1.2',
  'get_customer_tool',
  'customer_id: 12345',
  'Review → Allow',
  'jane.doe@acme.com',
  'Success',
]

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-blue-600/20 blur-3xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-blue-950/50 backdrop-blur">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-4 md:p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Uninjectable Console</p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                Agent Action Overview
              </h3>
            </div>

            <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">
              High Risk
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-400">Risk Score Today</p>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-6xl font-bold tracking-tight text-white">
                      72
                    </p>
                    <p className="mt-1 text-sm font-medium text-orange-300">
                      High
                    </p>
                  </div>

                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-[10px] border-slate-700 border-t-orange-400 border-r-orange-400">
                    <span className="text-xs font-semibold text-slate-300">
                      /100
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-400">Actions Last 24h</p>

                <div className="mt-4 space-y-3">
                  {actions.map((action) => (
                    <div
                      key={action.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className={action.className}>{action.label}</span>
                      <span className="font-semibold text-white">
                        {action.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-400">Top Risk Categories</p>

                <div className="mt-4 space-y-4">
                  {riskCategories.map((risk) => (
                    <div key={risk.label}>
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="text-slate-300">{risk.label}</span>
                        <span className="text-slate-500">{risk.value}</span>
                      </div>

                      <div className="h-1.5 rounded-full bg-slate-800">
                        <div
                          className={`h-1.5 rounded-full ${risk.barClassName}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-400">Event Trace</p>

                <div className="mt-4 space-y-3">
                  {events.map((event) => (
                    <div
                      key={`${event.time}-${event.label}`}
                      className="grid grid-cols-[64px_1fr_auto] items-center gap-3 text-xs"
                    >
                      <span className="text-slate-500">{event.time}</span>
                      <span className="truncate text-slate-300">
                        {event.label}
                      </span>
                      <span
                        className={`rounded-full px-2 py-1 font-semibold ${event.statusClassName}`}
                      >
                        {event.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-slate-400">Audit Trail</p>
              <span className="text-xs text-blue-300">Explainable path</span>
            </div>

            <div className="grid gap-3 md:grid-cols-6">
              {auditTrail.map((item, index) => (
                <div key={item} className="relative">
                  <div className="rounded-xl border border-white/10 bg-slate-900 px-3 py-3 text-xs text-slate-300">
                    {item}
                  </div>

                  {index !== auditTrail.length - 1 && (
                    <div className="absolute right-[-12px] top-1/2 hidden h-px w-6 bg-blue-400/40 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur md:block">
        <p className="text-xs text-slate-400">Policy decision</p>
        <p className="mt-1 text-sm font-semibold text-red-300">
          Block high-risk action
        </p>
      </div>
    </div>
  )
}

export default DashboardMockup