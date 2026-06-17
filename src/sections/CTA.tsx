import Button from '../components/Button'

function CTA() {
  return (
    <section
      id="contact"
      className="dark-pixel-grid bg-[#071033] px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="retro-panel-dark scanline relative overflow-hidden bg-[#050a26] p-8 text-white md:p-12">
          <div className="absolute right-8 top-8 hidden border-2 border-[#35d6ff] bg-[#071033] px-4 py-3 md:block">
            <p className="font-pixel text-[10px] text-[#35d6ff]">
              AGENTS PROTECTED
            </p>
            <p className="mt-2 font-pixel text-xl text-[#7cff7a]">002417</p>
          </div>

          <div className="max-w-3xl">
            <p className="font-pixel text-xs text-[#ffd84d]">
              MAKE AUTONOMOUS AI OBSERVABLE.
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">
              Building AI agents for real business operations?
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#dfe9ff]">
              Let’s make them observable, controllable, and accountable before
              they impact your customers, systems, or operations.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="mailto:hello@uninjectable.com">
                Request a Discovery Call
              </Button>

              <Button href="#product" variant="dark">
                Explore Platform
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA