export const mergeStyle = (a: any, b: any) => {
  if (!a) return b;
  if (!b) return a;
  if (Array.isArray(a) && Array.isArray(b)) 
    return [...a, ...b];
  if (Array.isArray(a))
    return [...a, b];
  if (Array.isArray(b))
    return [a, ...b];
  return {
    ...a,
    ...b,
  };
};
