import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Share, Plus, Download } from "lucide-react";
import { usePwaInstall } from "@/hooks/use-pwa-install";

export const InstallPrompt = () => {
  const { canShow, install, dismiss, hasNativePrompt, isIOS } = usePwaInstall();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!canShow) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(t);
  }, [canShow]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="md:hidden fixed left-3 right-3 z-[60] bg-bg-elevated/95 backdrop-blur-2xl border border-border rounded-2xl shadow-2xl"
          style={{ bottom: "calc(env(safe-area-inset-bottom) + 70px)" }}
        >
          <div className="p-4 flex items-start gap-3">
            <img
              src="/icon-192.png"
              alt="Self Love app icon"
              className="h-11 w-11 shrink-0 rounded-xl border border-border object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">Install Self Love</p>
              {isIOS && !hasNativePrompt ? (
                <p className="text-xs text-muted-foreground mt-1 leading-snug">
                  Tap <Share size={12} className="inline -mt-0.5 mx-0.5" /> then{" "}
                  <span className="text-foreground">Add to Home Screen </span>
                  <Plus size={12} className="inline -mt-0.5" />
                </p>
              ) : (
                <p className="text-xs text-muted-foreground mt-1 leading-snug">
                  Add to your home screen for the full experience.
                </p>
              )}
              {hasNativePrompt && (
                <button
                  onClick={install}
                  className="mt-3 inline-flex items-center gap-2 text-eyebrow text-[10px] px-3 py-2 bg-foreground text-background rounded-full active:scale-95 transition-transform"
                >
                  <Download size={12} /> Install
                </button>
              )}
            </div>
            <button
              onClick={() => {
                dismiss();
                setVisible(false);
              }}
              className="text-muted-foreground -mr-1 -mt-1 p-1 active:opacity-60"
              aria-label="Dismiss"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
