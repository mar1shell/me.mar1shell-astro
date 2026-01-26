import { useEffect, useState, useCallback, useRef } from "react";
import { ArrowUpIcon } from "../../icons";

function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        setShowScrollTop(window.scrollY > 400);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`interactive fixed right-8 bottom-8 z-50 cursor-pointer rounded-full bg-blue-400 p-3 text-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl dark:bg-green-400 ${
        showScrollTop
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <ArrowUpIcon />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
}

export default ScrollToTop;
