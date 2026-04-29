import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-32 bg-background">
      <div className="container py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="text-display-2 font-display">Self Love.</p>
          <p className="mt-4 max-w-sm text-muted-foreground">
            A digital art book by Mr. CAP. Twelve women. Twelve stories. One reckoning.
          </p>
        </div>
        <div>
          <p className="text-eyebrow text-muted-foreground mb-4">Newsletter</p>
          <p className="text-foreground/90 mb-4">Get the new stories before everybody else.</p>
          <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 bg-bg-secondary border border-border px-3 py-2 text-sm focus:outline-none focus:border-accent-rose transition-colors"
            />
            <button className="text-eyebrow border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
              Begin
            </button>
          </form>
        </div>
        <div className="md:text-right">
          <p className="text-eyebrow text-muted-foreground mb-4">Index</p>
          <ul className="space-y-2">
            <li><Link to="/stories" className="link-underline">The Twelve</Link></li>
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container py-6 flex justify-between text-xs text-muted-foreground">
          <span>© 2026 Mr. CAP — Cornelius A. Pratt</span>
          <span className="font-display italic">Read. Listen. Begin.</span>
        </div>
      </div>
    </footer>
  );
};
