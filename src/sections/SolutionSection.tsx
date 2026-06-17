import FeatureCard from '../components/FeatureCard'
import SectionHeader from '../components/SectionHeader'
import { capabilities } from '../data/siteContent'

function SolutionSection() {
  return (
    <section id="product" className="bg-slate-50 px-6 py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The solution"
          title="Govern every AI action before it reaches your business"
          description="Uninjectable acts as a runtime control layer between AI agents and the tools they use, helping teams observe, evaluate, control, and explain agent behavior."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <FeatureCard
              key={capability.title}
              title={capability.title}
              description={capability.description}
              icon={capability.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection