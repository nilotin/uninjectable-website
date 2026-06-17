function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-sm font-bold text-blue-700">
              U
            </div>

            <span className="text-lg font-bold">Uninjectable</span>
          </a>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
            Runtime governance for AI agents. Monitor, risk-score, approve, or
            block AI actions before they impact your business.
          </p>

          <p className="font-mono-accent mt-4 text-xs text-slate-400">
            Every action leaves a trail.
          </p>
        </div>

        <div className="grid gap-8 text-sm sm:grid-cols-3">
          <div>
            <h4 className="font-semibold text-slate-950">Product</h4>

            <div className="mt-4 space-y-3 text-slate-600">
              <a href="#product" className="block hover:text-blue-600">
                Overview
              </a>
              <a href="#use-cases" className="block hover:text-blue-600">
                Use Cases
              </a>
              <a href="#how-it-works" className="block hover:text-blue-600">
                How It Works
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-950">Company</h4>

            <div className="mt-4 space-y-3 text-slate-600">
              <a href="#team" className="block hover:text-blue-600">
                Team
              </a>
              <a href="#contact" className="block hover:text-blue-600">
                Contact
              </a>
              <a href="#deployment" className="block hover:text-blue-600">
                Deployment
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-950">Contact</h4>

            <div className="mt-4 space-y-3 text-slate-600">
              <a
                href="mailto:hello@uninjectable.com"
                className="block hover:text-blue-600"
              >
                hello@uninjectable.com
              </a>
              <p>Türkiye / Global</p>
              <p className="font-mono-accent text-xs text-green-600">
                System online
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-slate-500 md:flex-row">
          <p>© 2026 Uninjectable. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms
            </a>
            <a href="#" className="hover:text-blue-600">
              Security
            </a>
            <a href="#" className="hover:text-blue-600">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer