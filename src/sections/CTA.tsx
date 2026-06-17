import Button from '../components/Button'

function CTA() {
  return (
    <section id="contact" className="bg-white px-6 py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-center text-white md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.35),transparent_40%)]" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Get in touch
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Building AI agents for real business operations?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Let’s make them observable, controllable, and accountable before
              they impact your customers, systems, or operations.
            </p>

            <div className="mt-8 flex justify-center">
              <Button href="mailto:hello@uninjectable.com">
                Request a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA