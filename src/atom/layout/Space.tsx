import React from 'react';
import { View } from 'react-native';

type SpaceProps = {
  size?: number;
};
export const Space = ({
  size,
  ...props
}: SpaceProps) => {
  return (
    <View
      style={{ width: size, height: size }}
      {...props}
    />
  );
};
