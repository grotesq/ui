const resolveUnit = (value: number | string) => {
  if (typeof value === 'number')
    return `${value}px`;
  if (typeof value === 'string')
    return `${value}`;
};
export const resolvePadding = (padding: Padding) => {
  if (!padding) return '';

  if (typeof padding === 'number')
    return `padding: ${padding}px`;
  if (typeof padding === 'string')
    return `padding: ${padding}`;
  
  return `
    ${padding.top ? `padding-top: ${resolveUnit(padding.top)}` : ''}
    ${padding.right ? `padding-right: ${resolveUnit(padding.right)}` : ''}
    ${padding.bottom ? `padding-bottom: ${resolveUnit(padding.bottom)}` : ''}
    ${padding.left ? `padding-left: ${resolveUnit(padding.left)}` : ''}
  `;
};
export const resolveMargin = (margin: Margin) => {
  if (!margin) return '';

  if (typeof margin === 'number')
    return `margin: ${margin}px`;
  if (typeof margin === 'string')
    return `margin: ${margin}`;
  
  return `
    ${margin.top ? `margin-top: ${resolveUnit(margin.top)}` : ''}
    ${margin.right ? `margin-right: ${resolveUnit(margin.right)}` : ''}
    ${margin.bottom ? `margin-bottom: ${resolveUnit(margin.bottom)}` : ''}
    ${margin.left ? `margin-left: ${resolveUnit(margin.left)}` : ''}
  `;
};
