import Button from '../components/Button'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.35),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-10 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            Runtime Governance for AI Workflows
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Runtime Governance for AI Agents
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Monitor, risk-score, approve, or block AI actions before they impact
            your business.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button>Request a Demo</Button>
            <Button variant="secondary">Explore the Platform</Button>
          </div>

          <div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
            <span>Reduce AI risk</span>
            <span>Ensure compliance</span>
            <span>Build with confidence</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur">
          <div className="rounded-2xl bg-slate-900 p-5">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-semibold text-white">Overview</p>

              <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300">
                High Risk
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-800 p-5">
                <p className="text-sm text-slate-400">Risk Score</p>
                <p className="mt-4 text-5xl font-bold">72</p>
                <p className="mt-2 text-sm text-orange-300">High</p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <p className="text-sm text-slate-400">Actions</p>

                <div className="mt-4 space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-green-300">Allow</span>
                    <span>128</span>
                  </p>

                  <p className="flex justify-between">
                    <span className="text-yellow-300">Review</span>
                    <span>26</span>
                  </p>

                  <p className="flex justify-between">
                    <span className="text-red-300">Block</span>
                    <span>8</span>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <p className="text-sm text-slate-400">Top Risk</p>

                <div className="mt-4 space-y-3 text-xs">
                  <div>
                    <p>Data Exfiltration</p>
                    <div className="mt-1 h-1.5 rounded-full bg-red-500" />
                  </div>

                  <div>
                    <p>PII Exposure</p>
                    <div className="mt-1 h-1.5 w-2/3 rounded-full bg-yellow-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-800 p-5">
              <p className="mb-4 text-sm text-slate-400">Event Trace</p>

              <div className="space-y-3 text-sm text-slate-300">
                <p>Agent read customer_data.csv</p>
                <p>Agent called get_customer_tool</p>
                <p>Policy required human review</p>
                <p>Human approved the action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero