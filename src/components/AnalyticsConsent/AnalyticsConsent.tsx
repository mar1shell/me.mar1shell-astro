import { useEffect, useRef, useState } from "react";
import { analytics } from "../../data/analytics";
import { site } from "../../data/site";
import {
  enableAnalytics,
  readAnalyticsChoice,
  saveAnalyticsConsent,
} from "../../scripts/analytics";
import "./analytics-consent.css";

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<boolean | null>(null);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const settings = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const saved = readAnalyticsChoice();
    setChoice(saved);
    setOpen(saved === null);
    setReady(true);
    if (saved === true) enableAnalytics();
    function sync(event: StorageEvent) {
      if (event.key === analytics.consentKey || event.key === null) {
        window.location.reload();
      }
    }
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  function choose(accepted: boolean) {
    if (accepted !== choice && !saveAnalyticsConsent(accepted)) {
      setError(true);
      return;
    }
    if (!accepted && choice === true) {
      window.location.reload();
      return;
    }
    setChoice(accepted);
    setOpen(false);
    setError(false);
    settings.current?.focus({ preventScroll: true });
  }

  return (
    <div className="cookie-preferences">
      <button
        ref={settings}
        className="cookie-settings"
        type="button"
        disabled={!ready}
        aria-expanded={open}
        aria-controls="analytics-notice"
        onClick={() => {
          setOpen(!open);
          if (!open) requestAnimationFrame(() => heading.current?.focus());
        }}
      >
        Cookie settings
      </button>
      <section
        hidden={!open}
        id="analytics-notice"
        className="cookie-notice"
        aria-labelledby="analytics-title"
      >
        <h2 ref={heading} tabIndex={-1} id="analytics-title">
          Analytics cookies
        </h2>
        <p>
          I use Google Analytics to understand how this portfolio is used. If
          you accept, Google receives usage data and may set analytics cookies.
          The site works either way.
        </p>
        <details>
          <summary>Privacy details</summary>
          <p>
            {site.name} operates this site. Your choice is stored in this
            browser for 180 days. You can change it anytime in Cookie settings.
            See{" "}
            <a href="https://policies.google.com/technologies/partner-sites">
              how Google uses this data
            </a>{" "}
            or <a href={`mailto:${site.email}`}>contact me about privacy</a>.
          </p>
        </details>
        <div className="cookie-actions">
          <button type="button" onClick={() => choose(false)}>
            Reject analytics
          </button>
          <button type="button" onClick={() => choose(true)}>
            Accept analytics
          </button>
        </div>
        {error && <p role="status">Your browser could not save this choice.</p>}
      </section>
    </div>
  );
}
