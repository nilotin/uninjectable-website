import SectionHeader from '../components/SectionHeader'
import { deploymentOptions, differentiators } from '../data/siteContent'

function Deployment() {
  return (
    <section id="deployment" className="bg-slate-50 px-6 py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Deployment"
          title="Flexible deployment for enterprise environments"
          description="Use Uninjectable in the environment that matches your security, infrastructure, and data control requirements."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {deploymentOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                {option.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-950">
                {option.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Why Uninjectable
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Not another chatbot dashboard.
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                Uninjectable is a runtime control layer designed specifically
                for AI agent actions, policies, approvals, and auditability.
              </p>
            </div>

            <div className="grid gap-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h4 className="font-semibold text-white">{item.title}</h4>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deployment