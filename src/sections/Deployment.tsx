import SectionHeader from '../components/SectionHeader'
import { deploymentOptions, differentiators } from '../data/siteContent'

function Deployment() {
  return (
    <section
      id="deployment"
      className="bg-[#edf4ff] px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Deploy your way"
          title="Flexible deployment for enterprise environments"
          description="Use Uninjectable in the environment that matches your security, infrastructure, and data control requirements."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {deploymentOptions.map((option) => (
            <div
              key={option.title}
              className="retro-panel bg-white p-8 transition hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex h-14 min-w-14 items-center justify-center border-2 border-slate-950 bg-[#edf4ff] px-4 font-pixel text-xl text-[#123cbe] shadow-[3px_3px_0_#101936]">
                {option.icon}
              </div>

              <h3 className="text-2xl font-black uppercase text-slate-950">
                {option.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-700">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        <div className="retro-panel-dark scanline mt-20 overflow-hidden bg-[#071033] text-white">
          <div className="retro-window-bar flex items-center justify-between px-4 py-2">
            <span className="font-pixel text-xs">WHY UNINJECTABLE</span>
            <span className="font-pixel text-[10px] text-[#7cff7a]">
              SECURE BY DESIGN
            </span>
          </div>

          <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-pixel text-xs text-[#ffd84d]">
                NOT ANOTHER CHATBOT DASHBOARD.
              </p>

              <h3 className="mt-4 text-4xl font-black uppercase tracking-tight">
                Action-level governance for real agent workflows.
              </h3>

              <p className="mt-5 leading-7 text-[#dfe9ff]">
                Uninjectable is a runtime control layer designed specifically
                for AI agent actions, policies, approvals, and auditability.
              </p>
            </div>

            <div className="grid gap-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="border-2 border-[#35d6ff]/70 bg-[#050a26] p-5 shadow-[4px_4px_0_rgba(53,214,255,0.35)]"
                >
                  <h4 className="font-black uppercase text-white">
                    {item.title}
                  </h4>

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