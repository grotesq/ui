import React, { useEffect, useRef } from 'react';
import { Animated, ViewProps } from 'react-native';
import { mergeStyle } from 'style';

import { FadeInAnimator } from 'animator';

interface FadeInViewProps extends ViewProps {
  duration?: number;
  animator?: Animator;
};
export const FadeInView = ({
  duration = 160,
  animator = FadeInAnimator.Opacity,
  ...props
}: FadeInViewProps) => {
  const value = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(value, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      {...props}
      style={mergeStyle(props.style, animator(value))}
    />
  );
};
