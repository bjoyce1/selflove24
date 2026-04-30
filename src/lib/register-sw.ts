import { toast } from "sonner";

const DISMISS_KEY = "sl_sw_update_dismissed";
const TOAST_ID = "sw-update-available";

export const registerServiceWorker = () => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");

      const isDismissed = () => {
        try {
          return sessionStorage.getItem(DISMISS_KEY) === "1";
        } catch {
          return false;
        }
      };

      const markDismissed = () => {
        try {
          sessionStorage.setItem(DISMISS_KEY, "1");
        } catch {
          /* noop */
        }
      };

      const promptUpdate = (worker: ServiceWorker) => {
        if (isDismissed()) return;

        toast("New version available", {
          id: TOAST_ID,
          description: "Refresh to get the latest changes.",
          duration: Infinity,
          action: {
            label: "Refresh",
            onClick: () => {
              worker.postMessage({ type: "SKIP_WAITING" });
            },
          },
          cancel: {
            label: "Dismiss",
            onClick: () => {
              markDismissed();
            },
          },
          onDismiss: () => markDismissed(),
        });
      };

      // Wait until the new worker is fully ACTIVATED (not just installed)
      // before prompting — this guarantees the new SW is ready to take over.
      const watchForActivation = (worker: ServiceWorker) => {
        if (worker.state === "activated" && navigator.serviceWorker.controller) {
          promptUpdate(worker);
          return;
        }
        worker.addEventListener("statechange", () => {
          if (worker.state === "activated" && navigator.serviceWorker.controller) {
            promptUpdate(worker);
          }
        });
      };

      // If a waiting/active SW already exists from a previous load
      if (registration.waiting && navigator.serviceWorker.controller) {
        watchForActivation(registration.waiting);
      }

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;
        watchForActivation(newWorker);
      });

      // Reload once the new SW takes control (after user clicks Refresh)
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
    } catch (err) {
      // Silent fail — SW is an enhancement, not a requirement
      console.warn("[SW] registration failed:", err);
    }
  });
};
