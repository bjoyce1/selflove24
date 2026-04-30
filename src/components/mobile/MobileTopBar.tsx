import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const titleFor = (pathname: string): { eyebrow?: string; title: string; canBack: boolean } => {
  if (pathname === "/") return { title: "Self Love", canBack: false };
  if (pathname === "/stories") return { eyebrow: "Read", title: "The Twelve", canBack: false };
  if (pathname.startsWith("/stories/")) return { eyebrow: "Story", title: "The Twelve", canBack: true };
  if (pathname === "/about") return { eyebrow: "About", title: "Mr. CAP", canBack: false };
  if (pathname === "/contact") return { eyebrow: "Reach out", title: "Contact", canBack: false };
  return { title: "Self Love", canBack: true };
};

export const MobileTopBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { eyebrow, title, canBack } = titleFor(pathname);
  const isHome = pathname === "/";

  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Compact bar fades in as user scrolls; large title shrinks
  const compactOpacity = useTransform(scrollY, [40, 110], [0, 1]);
  const largeOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const largeY = useTransform(scrollY, [0, 80], [0, -16]);
  const largeScale = useTransform(scrollY, [0, 80], [1, 0.9]);

  // On home, hide the entire mobile top bar — hero handles its own header
  if (isHome) return null;

  return (
    <>
      <motion.header
        style={{ opacity: mounted ? compactOpacity : 0 }}
        className="fixed top-0 left-0 right-0 z-40 md:hidden bg-background/85 backdrop-blur-2xl border-b border-border/40"
      >
        <div
          className="flex items-center justify-center px-4 h-11 relative"
          style={{ paddingTop: "env(safe-area-inset-top)" }}
        >
          {canBack && (
            <button
              onClick={() => navigate(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center text-accent-rose active:opacity-60"
              style={{ marginTop: "calc(env(safe-area-inset-top) / 2)" }}
              aria-label="Back"
            >
              <ChevronLeft size={26} strokeWidth={2} />
            </button>
          )}
          <p className="text-[15px] font-display font-medium tracking-tight text-foreground truncate max-w-[60%]">
            {title}
          </p>
        </div>
      </motion.header>

      {/* Large title block — sits at top of page, scrolls away */}
      <motion.div
        style={{ opacity: largeOpacity, y: largeY, scale: largeScale }}
        className="md:hidden px-6 pt-4 pb-3 origin-left"
      >
        <div
          className="flex items-center gap-2 mb-1"
          style={{ paddingTop: "calc(env(safe-area-inset-top) + 8px)" }}
        >
          {canBack && (
            <button
              onClick={() => navigate(-1)}
              className="-ml-2 flex items-center text-accent-rose active:opacity-60"
              aria-label="Back"
            >
              <ChevronLeft size={20} />
              <span className="text-sm">Back</span>
            </button>
          )}
        </div>
        {eyebrow && (
          <p className="text-eyebrow text-accent-rose mb-2">{eyebrow}</p>
        )}
        <h1 className="font-display text-[34px] leading-[1.05] tracking-tight font-medium text-foreground">
          {title}
        </h1>
      </motion.div>
    </>
  );
};
