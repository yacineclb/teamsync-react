import { useState, useEffect } from 'react';

function getStorageValue(key: string, defaultValue: string | null) {
  const saved = localStorage.getItem(key);
  if (!saved) {
    return null;
  }
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: string | null) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
