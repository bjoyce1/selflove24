import { toast } from "sonner";

export const registerServiceWorker = () => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");

      const promptUpdate = (worker: ServiceWorker) => {
        toast("New version available", {
          description: "Refresh to get the latest changes.",
          duration: Infinity,
          action: {
            label: "Refresh",
            onClick: () => {
              worker.postMessage({ type: "SKIP_WAITING" });
            },
          },
        });
      };

      // If a waiting SW already exists (e.g., previous load detected one)
      if (registration.waiting && navigator.serviceWorker.controller) {
        promptUpdate(registration.waiting);
      }

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            promptUpdate(newWorker);
          }
        });
      });

      // Reload once the new SW takes control
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
