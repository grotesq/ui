import React, { useEffect, useState } from 'react';

import { TrueGate } from 'function';

type DebounceProps = {
  property: string;
  duration?: number;
  children: React.ReactNode;
  predicate?: Predicate;
};
export const Debounce = ({
  property,
  duration = 1000,
  children,
  predicate = TrueGate,
}: DebounceProps) => {
  const child = React.Children.only(children) as any;
  const value = child?.props?.[property];
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (!predicate(value)) return;

    const tid = setTimeout(() => {
      setDebouncedValue(value);
    }, duration);
    return () => clearTimeout(tid);
  }, [value]);

  return (
    <>
      {React.cloneElement(child, {
        [property]: debouncedValue,
      })}
    </>
  );
};
