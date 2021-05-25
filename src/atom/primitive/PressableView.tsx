import React from 'react';
import { View, Pressable, PressableProps, ViewProps } from 'react-native';

interface PressableViewProps extends Omit<PressableProps, 'style' | 'hitSlop'>, ViewProps {
};
export const PressableView = ({
  children,
  style,
  onPress,
  ...props
}: PressableViewProps) => {
  if (onPress) {
    return (
      <Pressable
        {...props}
      >
        <View
          style={style}
          {...props}
        >
          {children}
        </View>
      </Pressable>
    );
  }
  return (
    <View
      style={style}
      {...props}
    >
      {children}
    </View>
  );
};
