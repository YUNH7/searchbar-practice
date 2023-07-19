import { useState } from 'react';

const useDebounce = (time: number) => {
  const [timer, setTimer] = useState(-1);

  return (callback: () => void) => {
    clearTimeout(timer);
    const newTimer = setTimeout(callback, time);
    setTimer(newTimer);
  };
};

export default useDebounce;
