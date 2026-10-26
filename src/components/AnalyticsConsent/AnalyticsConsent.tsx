import { useEffect, useState } from "react";
import {
  enableAnalytics,
  hasAnalyticsConsent,
  saveAnalyticsConsent,
} from "../../scripts/analytics";

export default function AnalyticsConsent() {
  const [accepted, setAccepted] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setAccepted(hasAnalyticsConsent());
    enableAnalytics();
    setReady(true);
  }, []);

  function choose() {
    if (!saveAnalyticsConsent(!accepted)) {
      setError(true);
      return;
    }
    setError(false);
    setAccepted(!accepted);
    // Unload an already-running tracker immediately after withdrawal.
    if (accepted) window.location.reload();
  }

  return (
    <div className="analytics-preference">
      <p id="analytics-description">
        Optional Google Analytics helps me understand site visits. It uses
        cookies and sends usage data to Google. Analytics is off unless you
        enable it; you can turn it off here anytime.
      </p>
      <button
        type="button"
        disabled={!ready}
        onClick={choose}
        aria-describedby="analytics-description"
      >
        {accepted ? "Disable analytics" : "Enable analytics"}
      </button>
      {error && (
        <p role="status">
          Your preference could not be saved. Please check your browser storage
          settings.
        </p>
      )}
    </div>
  );
}
