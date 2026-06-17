import SectionHeader from '../components/SectionHeader'
import { teamMembers } from '../data/siteContent'

function Team() {
  return (
    <section
      id="team"
      className="pixel-grid bg-[#f8fbff] px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Founding team"
          title="Built by a focused team"
          description="Uninjectable is being developed by a technical and operational founding team focused on AI governance, enterprise security, and customer validation."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="retro-panel bg-white p-8 transition hover:-translate-y-1"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center border-2 border-slate-950 bg-[#071033] font-pixel text-sm text-[#35d6ff] shadow-[3px_3px_0_#101936]">
                {member.name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .slice(0, 2)}
              </div>

              <h3 className="text-xl font-black uppercase text-slate-950">
                {member.name}
              </h3>

              <p className="font-pixel mt-2 text-[10px] text-[#ff4fa3]">
                {member.role}
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-700">
                {member.description}
              </p>

              <div className="mt-6 border-t-2 border-slate-950 pt-4">
                <span className="font-pixel text-[10px] text-[#123cbe]">
                  LINKEDIN //
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