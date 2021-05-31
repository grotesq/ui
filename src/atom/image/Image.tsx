import React, { useEffect, useRef, useState } from 'react';
import { ImageProps as RNImageProps, Animated } from 'react-native';
import { mergeStyle, resolveMargin } from 'style';
import styled from 'styled/styled';

interface ImageProps extends RNImageProps {
  placeholder: any;
  children: React.ReactNode;
};
export const Image = ({
  source,
  placeholder,
  children,
  ...props
}: ImageProps) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const [prevSource, setPrevSource] = useState(placeholder);
  const [nextSource, setNextSource] = useState(source);

  useEffect(() => {
    setPrevSource(nextSource);
    setNextSource(source);
    opacity.setValue(0);
  }, [source]);

  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Container>
      <PrevImage
        source={prevSource}
        {...props}
      />
      <NextImage
        source={nextSource}
        onLoad={onLoad}
        {...props}
        style={mergeStyle(props.style, {
          opacity: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        })}
      />

      {children && (
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
      )}
    </Container>
  );
};

const isBlurHashSimple = (x: string) => {
  if (typeof x !== 'string') return false;
  if (!x.startsWith('http')) return false;
  return true;
};

const Container = styled.View`
`;
const PrevImage = styled.Image`
  position: absolute;
`;
const NextImage = styled(Animated.Image)`
  position: absolute;
`;
const ChildrenContainer = styled.View`
  ${resolveMargin('auto')}
`;
