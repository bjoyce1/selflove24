import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();
  // On home, fade in only after scrolling past hero. On other pages, always visible.
  const opacity = useTransform(scrollY, isHome ? [0, 400, 600] : [0, 0, 1], isHome ? [0, 0, 1] : [1, 1, 1]);
  const y = useTransform(scrollY, isHome ? [0, 600] : [0, 0], isHome ? [-20, 0] : [0, 0]);

  return (
    <motion.header
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40"
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-eyebrow text-foreground/90 hover:text-accent-rose transition-colors">
          SELF&nbsp;LOVE
        </Link>
        <nav className="flex items-center gap-8 text-eyebrow text-muted-foreground">
          <NavLink to="/stories" className={({ isActive }) => `link-underline ${isActive ? "text-foreground" : "hover:text-foreground"}`}>
            The Twelve
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `link-underline ${isActive ? "text-foreground" : "hover:text-foreground"}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `link-underline hidden sm:inline-block ${isActive ? "text-foreground" : "hover:text-foreground"}`}>
            Contact
          </NavLink>
        </nav>
      </div>
    </motion.header>
  );
};
