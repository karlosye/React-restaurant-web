import { useState, useEffect } from 'react';

const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let val;

    try {
      // if there is a value in local storage for given key, set it as initial state
      val = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      val = defaultValue;
    }

    return val;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorageState;