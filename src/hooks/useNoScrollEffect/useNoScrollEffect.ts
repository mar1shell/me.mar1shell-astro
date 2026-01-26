import { useEffect } from "react";

/**
 * Custom hook to disable scrolling on the main document
 * @param state - If true, scrolling is disabled
 */
function useNoScrollEffect(state: boolean) {
  useEffect(() => {
    if (state) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [state]);
}

export default useNoScrollEffect;
