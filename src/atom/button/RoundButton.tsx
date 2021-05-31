import React from 'react';
import styled from 'styled/styled';

import { PressableView } from 'atom/primitive';

interface RoundButtonProps {
  width?: string | number | 'auto';
  children: React.ReactNode;
  onPress: () => void;
};
export const RoundButton = ({
  width,
  children,
  onPress,
  ...props
}: RoundButtonProps) => {
  return (
    <Container
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
