import React from 'react';
import { Pressable, View } from 'react-native';
import styled from 'styled/styled';

interface IconProps {
  source: any,
  size: number;
  onPress?: () => void;
};
export const Icon = ({
  source,
  size,
  onPress,
  ...props
}: IconProps) => {
  const Wrapper = !!onPress
    ? Pressable
    : React.Fragment;

  return (
    <Wrapper
      onPress={onPress}
    >
      <Container
        size={size}
        source={source}
        {...props}
      />
    </Wrapper>
  );
};

const Container = styled.Image`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
`;
