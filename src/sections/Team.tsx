import SectionHeader from '../components/SectionHeader'
import { teamMembers } from '../data/siteContent'

function Team() {
  return (
    <section
      id="team"
      className="subtle-grid bg-white px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Team"
          title="Built by a focused founding team"
          description="Uninjectable is being developed by a technical and operational founding team focused on AI governance, enterprise security, and customer validation."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="enterprise-panel rounded-3xl p-8 transition duration-200 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-sm font-bold text-blue-700">
                {member.name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .slice(0, 2)}
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-950">
                {member.name}
              </h3>

              <p className="font-mono-accent mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                {member.role}
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                {member.description}
              </p>

              <div className="mt-6 border-t border-slate-200 pt-4">
                <span className="font-mono-accent text-xs text-slate-400">
                  LinkedIn profile
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team