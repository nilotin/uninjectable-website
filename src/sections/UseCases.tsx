import SectionHeader from '../components/SectionHeader'
import { useCases } from '../data/siteContent'

function UseCases() {
  return (
    <section
      id="use-cases"
      className="subtle-grid bg-white px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Use cases"
          title="Protect workflows where AI agents touch business systems"
          description="Uninjectable is designed for teams moving AI agents from simple chat interfaces into real operational environments."
        />

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="use-case-trace-card group pixel-card flex h-full min-h-[520px] flex-col bg-[#f8fbff] p-6 text-slate-950 transition duration-200 hover:-translate-y-1"
            >
              <div className="pixel-mini-icon mb-8 flex h-16 w-16 shrink-0 items-center justify-center bg-slate-100 text-blue-700">
                <img
                  src={`${import.meta.env.BASE_URL}${useCase.icon}`}
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 object-contain"
                />
              </div>

              <h3 className="min-h-[6.3rem] text-[1.65rem] font-extrabold uppercase leading-tight tracking-tight text-slate-950">
                {useCase.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-500">
                {useCase.description}
              </p>

              <div className="mt-auto pt-8">
                <div className="use-case-trace border-t border-slate-200 pt-5">
                  <div className="use-case-trace-track">
                    {[0, 1].map((group) => (
                      <div key={group} className="use-case-trace-group">
                        <span>source.read</span>
                        <span>→</span>
                        <span>tool.call</span>
                        <span>→</span>
                        <span>policy.check</span>
                        <span>→</span>
                        <span>decision</span>
                        <span>→</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 h-[6px] w-20 bg-blue-600 transition duration-200 group-hover:bg-[#ff4fa3]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases