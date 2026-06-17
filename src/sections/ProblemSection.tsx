import FeatureCard from '../components/FeatureCard'
import SectionHeader from '../components/SectionHeader'
import { problems } from '../data/siteContent'

function ProblemSection() {
  return (
    <section className="pixel-grid bg-[#edf4ff] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Threat model"
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

        <div className="retro-panel mt-12 bg-[#071033] p-6 text-white">
          <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <div>
              <p className="font-pixel text-[#ffd84d]">TRUST BUT VERIFY.</p>
              <h3 className="mt-3 text-3xl font-black uppercase">
                Agents can act fast.
              </h3>
            </div>

            <p className="leading-7 text-[#dfe9ff]">
              The real challenge is not only whether an AI agent can complete a
              task. The challenge is whether your team can understand, control,
              and explain the action before it affects customers, money, data,
              or operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection