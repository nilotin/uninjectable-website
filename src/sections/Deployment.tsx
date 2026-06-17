import SectionHeader from '../components/SectionHeader'
import { deploymentOptions, differentiators } from '../data/siteContent'

function Deployment() {
  return (
    <section
      id="deployment"
      className="subtle-grid bg-slate-50 px-6 py-24 scroll-mt-24"
    >
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
              className="enterprise-panel rounded-3xl p-8 transition duration-200 hover:-translate-y-1"
            >
              <div className="font-mono-accent mb-6 inline-flex h-12 min-w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 px-3 text-sm font-semibold text-blue-700">
                {option.icon}
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                {option.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        <div className="enterprise-panel-dark mt-20 overflow-hidden rounded-[2rem] bg-slate-950 text-white">
          <div className="console-bar flex items-center justify-between px-5 py-4">
            <div>
              <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Why Uninjectable
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                Designed for action-level governance
              </h3>
            </div>

            <span className="hidden rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300 sm:block">
              Secure by design
            </span>
          </div>

          <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Not another chatbot dashboard
              </p>

              <h3 className="mt-4 text-4xl font-bold tracking-tight">
                Built for real agent workflows.
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
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <h4 className="font-bold text-white">{item.title}</h4>

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