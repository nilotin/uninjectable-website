import Button from '../components/Button'
import DashboardMockup from '../components/DashboardMockup'

function Hero() {
  return (
    <section className="dark-subtle-grid relative overflow-hidden bg-slate-950 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_left,rgba(56,189,248,0.12),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2">
            <span className="status-dot h-2 w-2 rounded-full bg-green-400" />
            <span className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Every action leaves a trail
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Runtime Governance for AI Agents
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Trace, evaluate, approve, or block autonomous AI actions before they
            impact your customers, systems, or operations.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact">Request a Demo</Button>
            <Button href="#product" variant="dark">
              Explore the Platform
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-mono-accent text-xs uppercase tracking-[0.16em] text-cyan-300">
                Trace
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Every source, tool call, and action.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-mono-accent text-xs uppercase tracking-[0.16em] text-cyan-300">
                Explain
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Human-readable risk reasons.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-mono-accent text-xs uppercase tracking-[0.16em] text-cyan-300">
                Control
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Allow, review, or block by policy.
              </p>
            </div>
          </div>

          <p className="font-mono-accent mt-8 text-sm text-slate-400">
            AI agents act. We show why.
          </p>
        </div>

        <DashboardMockup />
      </div>
    </section>
  )
}

export default Hero