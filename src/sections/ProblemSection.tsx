import FeatureCard from '../components/FeatureCard'
import SectionHeader from '../components/SectionHeader'
import { problems } from '../data/siteContent'

function ProblemSection() {
  return (
    <section className="subtle-grid bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The problem"
          title="AI agents are moving from answers to actions"
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

        <div className="enterprise-panel mt-12 rounded-3xl p-8">
          <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-center">
            <div>
              <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                Trust, but verify
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Autonomy needs accountability.
              </h3>
            </div>

            <p className="leading-7 text-slate-600">
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