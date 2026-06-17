import FeatureCard from '../components/FeatureCard'
import SectionHeader from '../components/SectionHeader'
import { useCases } from '../data/siteContent'

function UseCases() {
  return (
    <section id="use-cases" className="bg-white px-6 py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Use cases"
          title="Built for real business workflows"
          description="Uninjectable is designed for teams that are moving AI agents from simple chat interfaces into real operational systems."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <FeatureCard
              key={useCase.title}
              title={useCase.title}
              description={useCase.description}
              icon={useCase.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases