import SectionHeader from '../components/SectionHeader'
import { useCases } from '../data/siteContent'

function UseCases() {
  return (
    <section
      id="use-cases"
      className="subtle-grid bg-white px-4 py-16 scroll-mt-24 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Use cases"
          title="Protect workflows where AI agents touch business systems"
          description="Uninjectable is designed for teams moving AI agents from simple chat interfaces into real operational environments."
        />

        <div className="mt-10 grid w-full min-w-0 grid-cols-2 items-stretch gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="use-case-trace-card group pixel-card flex min-h-[260px] w-full min-w-0 flex-col overflow-hidden bg-[#f8fbff] p-4 text-slate-950 transition duration-200 hover:-translate-y-1 md:min-h-[420px] md:p-6 lg:min-h-[520px]"
            >
              <div className="pixel-mini-icon mb-5 flex h-14 w-14 shrink-0 items-center justify-center bg-slate-100 text-blue-700 md:mb-8 md:h-16 md:w-16">
                <img
                  src={`${import.meta.env.BASE_URL}${useCase.icon}`}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 object-contain md:h-12 md:w-12"
                />
              </div>

              <h3 className="max-w-full break-words text-[1.05rem] font-extrabold uppercase leading-[1.08] tracking-tight text-slate-950 md:min-h-[6.3rem] md:text-[1.65rem]">
                {useCase.title}
              </h3>

              <p className="mt-4 max-w-full break-words text-[0.82rem] leading-6 text-slate-500 md:mt-5 md:text-base md:leading-8">
                {useCase.description}
              </p>

              <div className="mt-auto pt-5 md:pt-8">
                <div className="hidden border-t border-slate-200 pt-5 md:block">
                  <div className="use-case-trace">
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
                </div>

                <div className="mt-4 h-[5px] w-14 bg-blue-600 transition duration-200 group-hover:bg-[#ff4fa3] md:mt-6 md:h-[6px] md:w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases