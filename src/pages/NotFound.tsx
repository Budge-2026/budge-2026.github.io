import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

export function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wide text-muted">404</p>
      <h1 className="mt-2 text-4xl font-bold text-brand">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button to="/">Go home</Button>
        <Link to="/contact" className="inline-flex items-center text-sm text-brand hover:underline">
          Contact support
        </Link>
      </div>
    </div>
  )
}
