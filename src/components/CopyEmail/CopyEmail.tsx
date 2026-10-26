import { useEffect, useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState("");
  const [ready, setReady] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => {
    setReady(true);
    return () => clearTimeout(timer.current);
  }, []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email copied");
    } catch {
      setStatus("Please use the email link to get in touch.");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 4000);
  }
  return (
    <div className="copy-email">
      <button
        type="button"
        onClick={copy}
        disabled={!ready}
        className="text-link"
      >
        Copy email <span aria-hidden="true">⧉</span>
      </button>
      <span className="copy-status" role="status">
        {status}
      </span>
    </div>
  );
}
