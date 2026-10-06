import Button from '../components/Button'
import DashboardMockup from '../components/DashboardMockup'

function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-6 pt-28 text-white sm:px-6 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(1,117,166,0.11),transparent_34%),radial-gradient(circle_at_left,rgba(3,183,247,0.05),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-0 pb-8 pt-8 sm:px-6 md:gap-14 md:px-6 md:pb-24 md:pt-12 xl:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-3 rounded-[4px] border border-[#03b7f7]/30 bg-[#03b7f7]/10 px-4 py-2 text-[0.7rem] md:mb-6 md:px-4 md:py-3 md:text-xs">
            <span className="status-dot h-2 w-2 rounded-[4px] bg-green-400" />
            <span className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-[#aee6fd]">
              Flexible agents. Deterministic boundaries.
            </span>
          </div>

          <h1 className="mt-0 text-[3.1rem] font-extrabold leading-[0.95] tracking-tight text-white md:text-7xl xl:text-8xl">
            Deterministic Control for Probabilistic AI Agents
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300 md:mt-6 md:text-2xl md:leading-10">
            Baleena keeps the flexibility of LLM agents while adding
            RPA-like determinism at the execution boundary — resolving
            capabilities, enforcing stateful policy, routing review, and
            verifying real-world effects.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8 md:gap-4">
            <Button href="#contact">Request a Demo</Button>
            <Button href="#product" variant="dark">
              Explore the Platform
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 md:mt-10">
            <div className="rounded-[4px] border border-white/10 bg-white/5 p-3 md:p-4">
              <p className="font-mono-accent text-[0.62rem] uppercase tracking-[0.14em] text-[#4cc9f9] md:text-xs md:tracking-[0.16em]">
                Resolve
              </p>
              <p className="mt-2 text-[0.72rem] font-semibold leading-snug text-white md:text-sm">
                Canonical capability identity.
              </p>
            </div>

            <div className="rounded-[4px] border border-white/10 bg-white/5 p-3 md:p-4">
              <p className="font-mono-accent text-[0.62rem] uppercase tracking-[0.14em] text-[#4cc9f9] md:text-xs md:tracking-[0.16em]">
                Enforce
              </p>
              <p className="mt-2 text-[0.72rem] font-semibold leading-snug text-white md:text-sm">
                Stateful, deterministic policy.
              </p>
            </div>

            <div className="rounded-[4px] border border-white/10 bg-white/5 p-3 md:p-4">
              <p className="font-mono-accent text-[0.62rem] uppercase tracking-[0.14em] text-[#4cc9f9] md:text-xs md:tracking-[0.16em]">
                Verify
              </p>
              <p className="mt-2 text-[0.72rem] font-semibold leading-snug text-white md:text-sm">
                Declared effect vs. actual outcome.
              </p>
            </div>
          </div>

          <p className="font-mono-accent mt-6 text-xs text-slate-400 md:mt-8 md:text-sm">
            Let the model be flexible. Keep execution predictable.
          </p>
        </div>

        <DashboardMockup />
      </div>
    </section>
  )
}

export default Hero
