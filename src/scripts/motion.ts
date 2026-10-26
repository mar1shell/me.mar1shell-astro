import { motion } from "../data/motion";

/** Animate once on entry. Never hide server-rendered content before JS loads. */
export function initializeMotion() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const root = document.documentElement;
  root.style.setProperty("--hero-duration", `${motion.heroDuration}ms`);
  root.style.setProperty("--reveal-duration", `${motion.revealDuration}ms`);
  if (!motion.enabled || reducedMotion.matches) return;

  const targets = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
  );
  const observer = new IntersectionObserver(
    (entries) => {
      let revealed = 0;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).style.setProperty(
          "--reveal-delay",
          `${Math.min(revealed++, 2) * motion.stagger}ms`,
        );
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
  );

  targets.forEach((element) => {
    // Content already visible on page load or a deep link stays visible.
    if (element.getBoundingClientRect().top < window.innerHeight * 0.95) return;
    element.classList.add("reveal-ready");
    observer.observe(element);
  });

  // Keyboard users can always reach content, including during a reveal.
  const revealFocused = (event: FocusEvent) => {
    if (event.target instanceof Element) {
      event.target.closest(".reveal-ready")?.classList.add("is-revealed");
    }
  };
  document.addEventListener("focusin", revealFocused);

  const hero = document.querySelector<HTMLElement>(".hero");
  let frame = 0;
  const resetField = () => {
    cancelAnimationFrame(frame);
    hero?.style.setProperty("--field-x", "0px");
    hero?.style.setProperty("--field-y", "0px");
  };
  const moveField = (event: PointerEvent) => {
    if (!hero) return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty(
        "--field-x",
        `${((event.clientX - bounds.left) / bounds.width - 0.5) * 20}px`,
      );
      hero.style.setProperty(
        "--field-y",
        `${((event.clientY - bounds.top) / bounds.height - 0.5) * 14}px`,
      );
    });
  };
  if (
    hero?.querySelector(".network-field") &&
    motion.interactiveBackground &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) {
    hero?.addEventListener("pointermove", moveField, { passive: true });
    hero?.addEventListener("pointerleave", resetField);
  }

  // Respect an accessibility preference changed while the page is open.
  reducedMotion.addEventListener("change", (event) => {
    if (!event.matches) return;
    observer.disconnect();
    targets.forEach((element) => element.classList.add("is-revealed"));
    hero?.removeEventListener("pointermove", moveField);
    hero?.removeEventListener("pointerleave", resetField);
    document.removeEventListener("focusin", revealFocused);
    resetField();
  });
}
