function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/40 bg-blue-500/10 text-blue-400">
              U
            </div>

            <span className="text-lg font-bold">Uninjectable</span>
          </a>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Runtime governance for AI agents. Monitor, risk-score, approve, or
            block AI actions before they impact your business.
          </p>
        </div>

        <div className="grid gap-8 text-sm sm:grid-cols-3">
          <div>
            <h4 className="font-semibold text-white">Product</h4>

            <div className="mt-4 space-y-3 text-slate-400">
              <a href="#" className="block hover:text-white">
                Overview
              </a>
              <a href="#" className="block hover:text-white">
                Use Cases
              </a>
              <a href="#" className="block hover:text-white">
                How It Works
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Company</h4>

            <div className="mt-4 space-y-3 text-slate-400">
              <a href="#" className="block hover:text-white">
                Team
              </a>
              <a href="#" className="block hover:text-white">
                Contact
              </a>
              <a href="#" className="block hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>

            <div className="mt-4 space-y-3 text-slate-400">
              <a
                href="mailto:hello@uninjectable.com"
                className="block hover:text-white"
              >
                hello@uninjectable.com
              </a>
              <p>Türkiye / Global</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        © 2026 Uninjectable. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer