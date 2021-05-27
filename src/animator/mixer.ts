export const mix = (a: Animator, b: Animator): Animator => {
  return (value: any) => {
    return {
      ...a(value),
      ...b(value),
    };
  };
};
