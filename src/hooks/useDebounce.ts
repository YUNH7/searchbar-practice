import { useRef } from 'react';

const useDebounce = () => {
  const timerId = useRef<number>();
  return (callback: () => void, time: number) => {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(callback, time);
  };
};

export default useDebounce;
