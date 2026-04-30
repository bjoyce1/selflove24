import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const isMobile = useIsMobile();
  const { pathname } = useLocation();
  const isStoryDetail = pathname.startsWith("/stories/") && pathname !== "/stories";

  // iOS-style horizontal push for sub-pages on mobile, fade elsewhere
  if (isMobile && isStoryDetail) {
    return (
      <motion.div
        initial={{ x: "100%", opacity: 0.6 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "30%", opacity: 0 }}
        transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};
