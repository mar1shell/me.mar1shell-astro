import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Custom hook to initialize AOS (Animate On Scroll) library.
 * @param {number} duration - Duration of the animation in milliseconds.
 * @param {boolean} once - Whether the animation should happen only once.
 * @param {number} delay - Delay before the animation starts in milliseconds.
 */
function useAosEffect() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true, // Only animate once
      mirror: false, // Don't animate on scroll back
      throttleDelay: 100, // Throttle scroll events
      debounceDelay: 50, // Debounce resize events
    });

    return () => AOS.refresh();
  }, []);
}

export default useAosEffect;
