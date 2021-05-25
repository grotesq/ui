export const formatPhone = (x: string) => {
  if (!x) return '';

  const len = x.length;
  if (len >= 2 && x.substring(0,2) == '02') {
    if (len <= 2)
      return x;
    if (len <= 5)
      return x.substr(0, 2) + '-' + x.substr(2);
    if (len <= 9)
      return x.substr(0, 2) + '-' + x.substr(2, 3) + '-' + x.substr(5);
    if (len <= 10)
      return x.substr(0, 2) + '-' + x.substr(2, 4) + '-' + x.substr(6);
  }
  else {
    if (len <= 4)
      return x;
    if (len <= 6)
      return x.substr(0, 3) + '-' + x.substr(3);
    if (len === 7)
      return x.substr(0, 3) + '-' + x.substr(3, 3) + '-' + x.substr(6);
    if (len === 8)
      return x.substr(0, 4) + '-' + x.substr(4);
    if (len <= 10)
      return x.substr(0, 3) + '-' + x.substr(3, 3) + '-' + x.substr(6);
    if (len === 11)
      return x.substr(0, 3) + '-' + x.substr(3, 4) + '-' + x.substr(7);
  }
  return x;
};
