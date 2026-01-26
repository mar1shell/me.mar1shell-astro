import { useLayoutEffect } from "react";
import useLocalStorage from "../useLocalStorage/useLocalStorage";

/**
 * Custom hook for managing dark mode state.
 * uses useLocalStorage to persist the dark mode state across sessions.
 * @returns [isDarkMode, setDarkMode]
 */
export default function useDarkMode() {
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    "dark-theme",
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  );

  // Apply changes before paint (prevents flicker)
  useLayoutEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return [isDarkMode, setDarkMode] as const;
}
