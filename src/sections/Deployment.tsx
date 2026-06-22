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

        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:gap-6 lg:grid-cols-3">
          {deploymentOptions.map((option, index) => (
            <div
              key={option.title}
              className={`pixel-card bg-[#f8fbff] p-4 transition duration-200 hover:-translate-y-1 md:p-8 ${
              index === 2 ? 'col-span-2 mx-auto w-1/2 min-w-[170px] lg:col-span-1 lg:w-auto lg:min-w-0' : ''
            }`} >
              <div className="pixel-mini-icon mb-5 flex h-14 w-14 items-center justify-center bg-slate-100 text-blue-700 md:mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}${option.icon}`}
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 object-contain"
                />
              </div>

              <h3 className="text-[1.25rem] font-extrabold leading-tight tracking-tight text-slate-950 md:text-[2rem]">
                {option.title}
              </h3>

              <p className="mt-4 text-[0.85rem] leading-6 text-slate-500 md:mt-5 md:text-lg md:leading-8">
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

          <div className="grid gap-8 p-5 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Not another chatbot dashboard
              </p>

              <h3 className="mt-4 text-[2.5rem] font-extrabold leading-[1] tracking-tight text-white md:text-6xl">
                Built for real agent workflows.
              </h3>

              <p className="mt-6 text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                Uninjectable is a runtime control layer designed specifically
                for AI agent actions, policies, approvals, and auditability.
              </p>
            </div>

            <div className="grid gap-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="pixel-card-dark bg-[#111c2d] p-4 md:p-5"
                >
                  <h4 className="text-[1.25rem] font-extrabold leading-tight text-white md:text-2xl">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-[0.9rem] leading-6 text-slate-300 md:text-base md:leading-8">
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