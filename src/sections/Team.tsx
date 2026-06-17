import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { teamMembers } from '../data/siteContent'

function Team() {
  const [teamPhotoLoaded, setTeamPhotoLoaded] = useState(true)

  return (
    <section
      id="team"
      className="subtle-grid bg-[#eef3fb] px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Team"
          title="Built by a focused founding team"
          description="Uninjectable is being developed by a technical and operational founding team focused on AI governance, enterprise security, and customer validation."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="pixel-card bg-[#f8fbff] p-8 transition duration-200 hover:-translate-y-1"
            >
              <div className="pixel-mini-icon mb-6 flex h-16 w-16 items-center justify-center bg-slate-100 text-blue-700">
                <span className="text-lg font-bold">
                  {member.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')
                    .slice(0, 2)}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-950">
                {member.name}
              </h3>

              <p className="font-mono-accent mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                {member.role}
              </p>

              <p className="mt-6 text-base leading-8 text-slate-500">
                {member.description}
              </p>

              <div className="mt-8 border-t border-slate-200 pt-5">
                <span className="font-mono-accent text-xs text-slate-400">
                  LinkedIn profile
                </span>
              </div>
            </div>
          ))}

          <div className="pixel-card bg-[#f8fbff] p-8 transition duration-200 hover:-translate-y-1">
            <div className="mb-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-slate-950 bg-slate-100">
                {teamPhotoLoaded ? (
                  <img
                    src={`${import.meta.env.BASE_URL}team-photo.jpg`}
                    alt="Uninjectable founding team"
                    className="h-full w-full object-cover"
                    onError={() => setTeamPhotoLoaded(false)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Team photo
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        Add image as public/team-photo.jpg
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute right-3 top-3 bg-white/90 px-3 py-1 backdrop-blur">
                  <span className="font-mono-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-600">
                    Snapshot
                  </span>
                </div>
              </div>
            </div>

            <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
              Founding team
            </p>

            <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-950">
              Built together
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Different strengths, one shared mission: making autonomous AI
              safer, more observable, and more accountable.
            </p>

            <div className="mt-8 h-[6px] w-20 bg-blue-600" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team