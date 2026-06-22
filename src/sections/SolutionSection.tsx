import FeatureCard from '../components/FeatureCard'
import SectionHeader from '../components/SectionHeader'
import { capabilities } from '../data/siteContent'

function SolutionSection() {
  return (
    <section
      id="product"
      className="dark-subtle-grid bg-slate-950 px-4 py-16 scroll-mt-24 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Runtime control layer"
          title="Govern every AI action before business impact"
          description="Uninjectable acts as a control layer between AI agents and the tools they use, helping teams observe, evaluate, control, and explain agent behavior."
          variant="dark"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <FeatureCard
              key={capability.title}
              title={capability.title}
              description={capability.description}
              icon={capability.icon}
              variant="dark"
              compactOnMobile
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection