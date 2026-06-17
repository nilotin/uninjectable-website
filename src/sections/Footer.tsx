function Footer() {
  return (
    <footer className="border-t-2 border-slate-950 bg-[#dfe9ff] text-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#" className="flex items-center gap-3">
            <div className="retro-panel flex h-9 w-9 items-center justify-center bg-[#071033] text-[#35d6ff]">
              <span className="font-pixel text-xs">U</span>
            </div>

            <span className="text-lg font-black uppercase">Uninjectable</span>
          </a>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-700">
            Runtime governance for AI agents. Monitor, risk-score, approve, or
            block AI actions before they impact your business.
          </p>

          <p className="font-pixel mt-4 text-[10px] text-[#123cbe]">
            BEST VIEWED BY HUMANS AND AI AUDITORS
          </p>
        </div>

        <div className="grid gap-8 text-sm sm:grid-cols-3">
          <div>
            <h4 className="font-pixel text-[10px] text-[#123cbe]">PRODUCT</h4>

            <div className="mt-4 space-y-3 text-slate-700">
              <a href="#product" className="block hover:text-[#ff4fa3]">
                Overview
              </a>
              <a href="#use-cases" className="block hover:text-[#ff4fa3]">
                Use Cases
              </a>
              <a href="#how-it-works" className="block hover:text-[#ff4fa3]">
                How It Works
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-pixel text-[10px] text-[#123cbe]">COMPANY</h4>

            <div className="mt-4 space-y-3 text-slate-700">
              <a href="#team" className="block hover:text-[#ff4fa3]">
                Team
              </a>
              <a href="#contact" className="block hover:text-[#ff4fa3]">
                Contact
              </a>
              <a href="#deployment" className="block hover:text-[#ff4fa3]">
                Deployment
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-pixel text-[10px] text-[#123cbe]">CONTACT</h4>

            <div className="mt-4 space-y-3 text-slate-700">
              <a
                href="mailto:hello@uninjectable.com"
                className="block hover:text-[#ff4fa3]"
              >
                hello@uninjectable.com
              </a>
              <p>Türkiye / Global</p>
              <p className="font-pixel text-[10px] text-[#7cff7a]">
                SYSTEM ONLINE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-slate-950 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-slate-600 md:flex-row">
          <p>© 2026 Uninjectable. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-[#ff4fa3]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#ff4fa3]">
              Terms
            </a>
            <a href="#" className="hover:text-[#ff4fa3]">
              Security
            </a>
            <a href="#" className="hover:text-[#ff4fa3]">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer