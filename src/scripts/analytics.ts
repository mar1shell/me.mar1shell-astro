import { analytics } from "../data/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

export function hasAnalyticsConsent(): boolean {
  try {
    const saved = JSON.parse(
      localStorage.getItem(analytics.consentKey) || "null",
    );
    return saved?.accepted === true && saved.expires > Date.now();
  } catch {
    return false;
  }
}

export function enableAnalytics() {
  if (!hasAnalyticsConsent()) return;
  window[`ga-disable-${analytics.measurementId}`] = false;
  if (document.getElementById("consented-analytics")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", analytics.measurementId);
  const script = document.createElement("script");
  script.id = "consented-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}`;
  document.head.append(script);
}

export function saveAnalyticsConsent(accepted: boolean) {
  try {
    localStorage.setItem(
      analytics.consentKey,
      JSON.stringify({
        accepted,
        expires: Date.now() + analytics.consentLifetimeMs,
      }),
    );
  } catch {
    // If consent cannot be saved, analytics stays off.
    return false;
  }
  if (accepted) enableAnalytics();
  else {
    window[`ga-disable-${analytics.measurementId}`] = true;
    document.getElementById("consented-analytics")?.remove();
    // Clear GA cookies for host-only and parent-domain cookie scopes.
    const domains = window.location.hostname
      .split(".")
      .map((_, i, parts) => parts.slice(i).join("."));
    for (const cookie of document.cookie.split(";")) {
      const name = cookie.trim().split("=")[0];
      if (name !== "_ga" && !name?.startsWith("_ga_")) continue;
      document.cookie = `${name}=; Max-Age=0; path=/`;
      for (const domain of domains)
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
    }
  }
  return true;
}
