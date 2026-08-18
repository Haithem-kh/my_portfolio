import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-gold text-sm mb-4">error 404</span>
      <h1 className="font-display text-4xl sm:text-5xl font-semibold text-bone mb-4">Page not found</h1>
      <p className="text-bone-dim max-w-md mb-8">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink font-display hover:bg-gold-glow transition-colors">
        Back to home
      </Link>
    </div>
  );
}
