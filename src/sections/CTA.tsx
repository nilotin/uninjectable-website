import Button from '../components/Button'

function CTA() {
  return (
    <section
      id="contact"
      className="dark-subtle-grid bg-slate-950 px-4 py-16 scroll-mt-24 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="pixel-card-dark bg-[#08111f] p-8 text-white md:p-12">
          <div className="mb-10 flex items-start justify-between gap-6">
            <div>
              <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Make autonomous AI accountable
              </p>

              <h2 className="mt-4 max-w-4xl text-6xl font-extrabold leading-[0.95] tracking-tight">
                Building AI agents for real business operations?
              </h2>

              <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
                Let’s make them observable, controllable, and accountable before
                they impact your customers, systems, or operations.
              </p>
            </div>

            <div className="hidden border border-green-400/20 bg-green-400/10 px-5 py-3 md:block">
              <p className="font-mono-accent text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
                System online
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="mailto:hello@uninjectable.com">
              Request a Discovery Call
            </Button>

            <Button href="#product" variant="dark">
              Explore Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA