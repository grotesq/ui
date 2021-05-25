declare interface TopRightBottomLeft {
  top?: number | string | 'auto';
  right?: number | string | 'auto';
  bottom?: number | string | 'auto';
  left?: number | string | 'auto';
};

declare type Padding = number | string | TopRightBottomLeft;
declare type Margin = number | string | TopRightBottomLeft;
