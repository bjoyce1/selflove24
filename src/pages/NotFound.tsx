import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <p className="text-eyebrow text-accent-rose mb-6">Lost</p>
        <h1 className="text-hero">404</h1>
        <p className="mt-6 font-display italic text-xl text-muted-foreground">
          The page you're looking for isn't here. Maybe it never was.
        </p>
        <Link to="/" className="mt-10 inline-block text-eyebrow link-underline">
          Return Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
