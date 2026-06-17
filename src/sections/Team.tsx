import SectionHeader from '../components/SectionHeader'
import { teamMembers } from '../data/siteContent'

function Team() {
  return (
    <section id="team" className="bg-white px-6 py-24 scroll-mt-24">
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
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-xl font-bold text-white">
                {member.name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .slice(0, 2)}
              </div>

              <h3 className="text-xl font-bold text-slate-950">
                {member.name}
              </h3>

              <p className="mt-1 text-sm font-semibold text-blue-600">
                {member.role}
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team