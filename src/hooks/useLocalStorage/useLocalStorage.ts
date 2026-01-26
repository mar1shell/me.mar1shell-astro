import { useState } from "react";

/**
 * Custom hook for managing local storage.
 * @param key The key to store the value under.
 * @type T The type of the value to store.
 * @param initialValue The initial value to use if no value is found in local storage.
 * @returns A tuple containing the stored value and a function to update it.
 */
function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);

      return item !== null ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {
      // Ignore write errors
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
