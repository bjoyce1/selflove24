import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets window scroll to the top on every route change.
 * Skips when the URL contains a hash (so anchor links still work).
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    // Use "auto" so the jump is instant and not fighting page transitions
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // Some browsers track scroll on documentElement / body separately
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, [pathname, hash]);

  return null;
};
