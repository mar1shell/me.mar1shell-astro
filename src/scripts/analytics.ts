import { analytics } from "../data/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
    [key: `ga-disable-${string}`]: boolean;
  }
}

export function readAnalyticsChoice(): boolean | null {
  try {
    const saved = JSON.parse(
      localStorage.getItem(analytics.consentKey) || "null",
    );
    return typeof saved?.accepted === "boolean" &&
      typeof saved.expires === "number" &&
      saved.expires > Date.now()
      ? saved.accepted
      : null;
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent() {
  return readAnalyticsChoice() === true;
}

export function enableAnalytics() {
  if (!hasAnalyticsConsent()) return;
  window[`ga-disable-${analytics.measurementId}`] = false;
  if (document.getElementById("consented-analytics")) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.id = "consented-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${analytics.containerId}`;
  document.head.append(script);
}

export function saveAnalyticsConsent(accepted: boolean) {
  try {
    localStorage.setItem(
      analytics.consentKey,
      JSON.stringify({
        accepted,
        decidedAt: Date.now(),
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
