import { NavLink, useLocation } from "react-router-dom";
import { Home, BookOpen, User, Mail } from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/stories", label: "The Twelve", icon: BookOpen },
  { to: "/about", label: "About", icon: User },
  { to: "/contact", label: "Contact", icon: Mail },
];

export const MobileTabBar = () => {
  const { pathname } = useLocation();
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/85 backdrop-blur-2xl border-t border-border/50"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Primary"
    >
      <ul className="grid grid-cols-4 px-2 pt-1.5 pb-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = tab.exact ? pathname === tab.to : pathname.startsWith(tab.to);
          return (
            <li key={tab.to} className="flex">
              <NavLink
                to={tab.to}
                className="relative flex-1 flex flex-col items-center justify-center gap-1 py-1.5 active:scale-95 transition-transform duration-150 select-none"
              >
                <span
                  className={`relative flex items-center justify-center transition-colors ${
                    active ? "text-accent-rose" : "text-muted-foreground"
                  }`}
                >
                  <Icon size={22} strokeWidth={active ? 2.2 : 1.6} />
                </span>
                <span
                  className={`text-[10px] tracking-[0.12em] uppercase font-medium transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {tab.label}
                </span>
                {active && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute -top-1.5 h-0.5 w-8 rounded-full bg-accent-rose"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
