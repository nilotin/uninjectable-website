import FeatureCard from '../components/FeatureCard'
import SectionHeader from '../components/SectionHeader'
import { problems } from '../data/siteContent'

function ProblemSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The problem"
          title="Why teams need control over AI actions"
          description="AI agents are starting to read data, call tools, update systems, send messages, and trigger business workflows. But most teams still lack visibility and control over these actions."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <FeatureCard
              key={problem.title}
              title={problem.title}
              description={problem.description}
              icon={problem.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection