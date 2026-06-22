import SectionHeader from '../components/SectionHeader'
import { deploymentOptions, differentiators } from '../data/siteContent'

function Deployment() {
  return (
    <section
      id="deployment"
      className="subtle-grid bg-[#eef3fb] px-4 py-16 scroll-mt-24 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Deployment"
          title="Flexible deployment for enterprise environments"
          description="Use Uninjectable in the environment that matches your security, infrastructure, and data control requirements."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {deploymentOptions.map((option) => (
            <div
              key={option.title}
              className="group pixel-card flex h-full min-h-[430px] flex-col bg-[#f8fbff] p-8 text-slate-950 transition duration-200 hover:-translate-y-1"
            >
              <div className="pixel-mini-icon mb-8 flex h-16 w-16 shrink-0 items-center justify-center bg-slate-100 text-blue-700">
                <img
                  src={`${import.meta.env.BASE_URL}${option.icon}`}
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 object-contain"
                />
              </div>

              <h3 className="min-h-[4.8rem] text-[2rem] font-extrabold leading-tight tracking-tight text-slate-950">
                {option.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                {option.description}
              </p>

              <div className="mt-auto pt-8">
                <div className="h-[6px] w-20 bg-blue-600 transition duration-200 group-hover:bg-[#ff4fa3]" />
              </div>
            </div>
          ))}
        </div>

        <div className="pixel-card-dark mt-20 overflow-hidden bg-[#08111f] text-white">
          <div className="console-bar flex items-center justify-between px-5 py-4">
            <div>
              <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Why Uninjectable
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                Designed for action-level governance
              </h3>
            </div>

            <span className="hidden border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300 sm:block">
              Secure by design
            </span>
          </div>

          <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Not another chatbot dashboard
              </p>

              <h3 className="mt-4 text-6xl font-extrabold leading-[0.95] tracking-tight text-white">
                Built for real agent workflows.
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Uninjectable is a runtime control layer designed specifically
                for AI agent actions, policies, approvals, and auditability.
              </p>
            </div>

            <div className="grid gap-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="pixel-card-dark bg-[#111c2d] p-5"
                >
                  <h4 className="text-2xl font-extrabold leading-tight text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-base leading-8 text-slate-300">
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