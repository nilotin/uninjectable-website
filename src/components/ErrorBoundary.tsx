import { Component, type ReactNode } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

// Shows a plain fallback instead of a blank page; never renders error details.
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 text-slate-950">
        <div className="max-w-md text-center">
          <p className="font-mono-accent text-xs uppercase tracking-[0.16em] text-slate-400">
            Something went wrong
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
            We couldn't load this page
          </h1>
          <p className="mt-4 text-slate-600">
            Please refresh and try again. If the problem continues, contact{' '}
            <a href="mailto:info@getbaleena.com" className="text-blue-600 hover:text-blue-700">
              info@getbaleena.com
            </a>
            .
          </p>
          <a
            href="/"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
          >
            Reload homepage
          </a>
        </div>
      </main>
    )
  }
}

export default ErrorBoundary
