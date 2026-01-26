import { useEffect, useState, useRef, useCallback } from "react";

/**
 * Custom hook to manage scroll behavior for showing/hiding elements based on scroll position.
 * This hook tracks the scroll position and determines whether to show an element
 * or not, as well as whether the user is at the top of the page.
 * - if the user is at the top of the page, the element will always be shown.
 * - if the user scrolls down, the element will be hidden,
 * - if the user scrolls up, the element will be shown again.
 * @returns {Array} - An array containing two boolean values:
 *   - `show`: Indicates whether the element should be shown.
 *   - `isTop`: Indicates whether the user is at the top of the page.
 */
export default function useScrollTop(): [boolean, boolean] {
  const [show, setShow] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Only update if scroll position changed significantly
        if (Math.abs(currentScrollY - lastScrollY.current) < 5) {
          ticking.current = false;
          return;
        }

        if (currentScrollY <= 20) {
          // At the top: always show
          setIsTop(true);
          setShow(true);
        } else if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setIsTop(false);
          setShow(false);
        } else {
          // Scrolling up
          setIsTop(false);
          setShow(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });

      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    // Set initial scroll position
    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: false,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return [show, isTop];
}
