import { useEffect, useState, useCallback } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "sl_install_dismissed_at";
const DISMISS_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

export const useIsStandalone = () => {
  const [standalone, setStandalone] = useState(false);
  useEffect(() => {
    const check = () =>
      window.matchMedia("(display-mode: standalone)").matches ||
      // iOS Safari
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window.navigator as any).standalone === true;
    setStandalone(check());
    const mql = window.matchMedia("(display-mode: standalone)");
    const onChange = () => setStandalone(check());
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);
  return standalone;
};

export const useIsIOS = () => {
  const [ios, setIos] = useState(false);
  useEffect(() => {
    const ua = window.navigator.userAgent;
    setIos(/iPhone|iPad|iPod/.test(ua) && !/CriOS|FxiOS/.test(ua));
  }, []);
  return ios;
};

export const usePwaInstall = () => {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const standalone = useIsStandalone();
  const ios = useIsIOS();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
    if (dismissedAt && Date.now() - dismissedAt < DISMISS_TTL_MS) setDismissed(true);

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  const install = useCallback(async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
  }, [deferred]);

  const dismiss = useCallback(() => {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setDismissed(true);
  }, []);

  const canShow = !standalone && !dismissed && (!!deferred || ios);

  return { canShow, install, dismiss, hasNativePrompt: !!deferred, isIOS: ios, isStandalone: standalone };
};
