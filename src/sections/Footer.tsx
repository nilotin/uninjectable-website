function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#" className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}uninjectable-logo-dark.png`}
              alt="Uninjectable logo"
              className="h-12 w-auto"
            />

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
                href="mailto:info@uninjectable.com"
                className="block hover:text-blue-600"
              >
                info@uninjectable.com
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

      <div className="footer-audit-ticker" aria-hidden="true">
        <div className="footer-audit-track">
          {[0, 1].map((group) => (
            <div key={group} className="footer-audit-group">
              <span>trace stored</span>
              <span>·</span>
              <span>policy evaluated</span>
              <span>·</span>
              <span>human review ready</span>
              <span>·</span>
              <span>audit trail preserved</span>
              <span>·</span>
              <span>risk score calculated</span>
              <span>·</span>
              <span>action controlled</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer