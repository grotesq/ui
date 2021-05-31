import React from 'react';
import styled from 'styled/styled';

import { PressableView } from 'atom/primitive';

interface ButtonProps {
  width?: string | number | 'auto';
  children: React.ReactNode;
  onPress: () => void;
};
export const Button = ({
  width = '100%',
  children,
  onPress,
  ...props
}: ButtonProps) => {
  return (
    <Container
      width={width}
      onPress={onPress}
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled(PressableView)`
  ${({ width }) => `
    width: ${isNaN(+width) ? width : `${width}px`};
  `}
`;
