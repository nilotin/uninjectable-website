import Button from '../components/Button'
import DashboardMockup from '../components/DashboardMockup'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.35),transparent_35%)]" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-10 lg:grid-cols-[0.95fr_1.05fr]">
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
            <Button href="#contact">Request a Demo</Button>
            <Button href="#product" variant="secondary">
              Explore the Platform
            </Button>
          </div>

          <div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Reduce AI risk</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Catch risky actions before execution.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Ensure control</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Route sensitive decisions to review.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Build trust</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Keep every action explainable.
              </p>
            </div>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  )
}

export default Hero