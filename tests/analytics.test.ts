import { beforeEach, describe, expect, it, vi } from "vitest";
import { analytics } from "../src/data/analytics";
import {
  enableAnalytics,
  hasAnalyticsConsent,
  saveAnalyticsConsent,
} from "../src/scripts/analytics";

beforeEach(() => {
  vi.restoreAllMocks();
  localStorage.clear();
  document.head.innerHTML = "";
  delete window.dataLayer;
  delete window.gtag;
});

describe("analytics consent", () => {
  it("makes no tracking script or queue before explicit consent", () => {
    enableAnalytics();
    expect(document.querySelector("script")).toBeNull();
    expect(window.dataLayer).toBeUndefined();
    expect(hasAnalyticsConsent()).toBe(false);
  });

  it("loads once after opt-in and remembers consent", () => {
    expect(saveAnalyticsConsent(true)).toBe(true);
    expect(hasAnalyticsConsent()).toBe(true);
    enableAnalytics();
    expect(document.querySelectorAll("#consented-analytics")).toHaveLength(1);
    expect(document.querySelector("script")?.src).toContain(
      analytics.measurementId,
    );
    expect(window.dataLayer).toHaveLength(2);
  });

  it("disables tracking and clears analytics cookies after withdrawal", () => {
    saveAnalyticsConsent(true);
    document.cookie = "_ga=test; path=/";
    document.cookie = "_ga_1QRTYJR377=test; path=/";
    saveAnalyticsConsent(false);
    expect(hasAnalyticsConsent()).toBe(false);
    expect(window[`ga-disable-${analytics.measurementId}`]).toBe(true);
    expect(document.querySelector("script")).toBeNull();
    expect(document.cookie).not.toContain("_ga");
    enableAnalytics();
    expect(document.querySelector("script")).toBeNull();
  });

  it("fails closed for expired, malformed, or inaccessible consent storage", () => {
    localStorage.setItem(
      analytics.consentKey,
      JSON.stringify({ accepted: true, expires: Date.now() - 1 }),
    );
    expect(hasAnalyticsConsent()).toBe(false);
    localStorage.setItem(analytics.consentKey, "invalid");
    expect(hasAnalyticsConsent()).toBe(false);
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("Blocked");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Blocked");
    });
    expect(hasAnalyticsConsent()).toBe(false);
    expect(saveAnalyticsConsent(true)).toBe(false);
    expect(document.querySelector("script")).toBeNull();
  });
});
