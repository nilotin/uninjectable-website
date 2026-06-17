import Button from '../components/Button'
import DashboardMockup from '../components/DashboardMockup'

function Hero() {
  return (
    <section className="dark-pixel-grid relative overflow-hidden bg-[#071033] pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,79,163,0.18),transparent_32%),radial-gradient(circle_at_left,rgba(53,214,255,0.18),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 border-2 border-[#35d6ff] bg-[#050a26] px-4 py-2 shadow-[4px_4px_0_#35d6ff]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#7cff7a]" />
            <span className="font-pixel text-xs text-[#7cff7a]">
              SYSTEM STATUS: ONLINE
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            AI agents act.
            <span className="block text-[#ff4fa3]">We show why.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-[#dfe9ff]">
            Uninjectable reveals the why behind every action your AI agent
            takes. Trace, explain, approve, or block before business impact.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact">Request Demo</Button>
            <Button href="#product" variant="dark">
              Try Live Demo
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="retro-panel bg-[#edf4ff] p-4 text-slate-950">
              <p className="font-pixel text-[10px] text-[#123cbe]">TRACE</p>
              <p className="mt-2 text-sm font-bold">Every tool call.</p>
            </div>

            <div className="retro-panel bg-[#edf4ff] p-4 text-slate-950">
              <p className="font-pixel text-[10px] text-[#123cbe]">EXPLAIN</p>
              <p className="mt-2 text-sm font-bold">Every risk reason.</p>
            </div>

            <div className="retro-panel bg-[#edf4ff] p-4 text-slate-950">
              <p className="font-pixel text-[10px] text-[#123cbe]">CONTROL</p>
              <p className="mt-2 text-sm font-bold">Every AI action.</p>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-[#ffd84d] bg-[#050a26]/70 p-5">
            <p className="font-pixel text-xs text-[#ffd84d]">
              TRUST BUT VERIFY.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              AI agents can read, decide, and act across your systems. But can
              your team explain why they did it?
            </p>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  )
}

export default Hero