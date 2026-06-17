import SectionHeader from '../components/SectionHeader'
import { workflowSteps } from '../data/siteContent'

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-950 px-6 py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How it works"
          title="A simple control flow for high-risk AI actions"
          description="Uninjectable evaluates every important agent action in context and turns risky workflows into explainable, reviewable decisions."
          variant="dark"
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {workflowSteps.map((step, index) => (
            <div
              key={step}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-base font-semibold leading-6 text-white">
                {step}
              </h3>

              {index !== workflowSteps.length - 1 && (
                <div className="absolute -right-3 top-10 hidden h-px w-6 bg-blue-400/40 lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Example decision
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white">
                A refund action gets flagged before execution.
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                The agent attempts to issue a high-value refund based on an
                untrusted source. Uninjectable scores the action, identifies the
                risk reasons, and routes the decision to human review or blocks
                it based on policy.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm text-slate-400">Policy Check</span>
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300">
                  Block
                </span>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Action</span>
                  <span className="text-white">issue_refund</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Amount</span>
                  <span className="text-white">$5,000</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Source Trust</span>
                  <span className="text-yellow-300">Low</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Risk Score</span>
                  <span className="text-red-300">105</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks