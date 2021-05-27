import { Animated, Easing } from 'react-native';

export const FadeInAnimator = {
  Opacity: (value: Animated.Value) => {
    return {
      opacity: value.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    };
  },
  Scale: (value: Animated.Value) => {
    return {
      transform: [{
        scale: value.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      }],
    };
  },
} as Record<string, Animator>;
