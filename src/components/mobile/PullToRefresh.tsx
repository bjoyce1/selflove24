import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { RefreshCw } from "lucide-react";

const THRESHOLD = 70;
const MAX = 120;

export const PullToRefresh = ({ children }: { children: React.ReactNode }) => {
  const y = useMotionValue(0);
  const [refreshing, setRefreshing] = useState(false);
  const startY = useRef<number | null>(null);
  const pulling = useRef(false);

  const opacity = useTransform(y, [0, THRESHOLD], [0, 1]);
  const rotate = useTransform(y, [0, MAX], [0, 360]);
  const scale = useTransform(y, [0, THRESHOLD], [0.6, 1]);

  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      if (window.scrollY > 0 || refreshing) return;
      startY.current = e.touches[0].clientY;
      pulling.current = true;
    };
    const onMove = (e: TouchEvent) => {
      if (!pulling.current || startY.current === null) return;
      const delta = e.touches[0].clientY - startY.current;
      if (delta <= 0) {
        y.set(0);
        return;
      }
      // resistance curve
      const eased = Math.min(MAX, delta * 0.5);
      y.set(eased);
    };
    const onEnd = () => {
      if (!pulling.current) return;
      pulling.current = false;
      startY.current = null;
      if (y.get() >= THRESHOLD) {
        setRefreshing(true);
        animate(y, 50, { type: "spring", stiffness: 240, damping: 24 });
        setTimeout(() => {
          window.location.reload();
        }, 400);
      } else {
        animate(y, 0, { type: "spring", stiffness: 280, damping: 26 });
      }
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [y, refreshing]);

  return (
    <>
      <motion.div
        style={{ opacity, scale, rotate }}
        className="md:hidden fixed top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none mt-12 text-accent-rose"
        animate={refreshing ? { rotate: 360 } : undefined}
        transition={refreshing ? { duration: 0.8, repeat: Infinity, ease: "linear" } : undefined}
      >
        <RefreshCw size={22} />
      </motion.div>
      <motion.div style={{ y }}>{children}</motion.div>
    </>
  );
};
