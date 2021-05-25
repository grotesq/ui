import React from 'react';
import styled from 'styled-components/native';

import { PressableView } from 'atom/primitive';

type TagProps = {
  children: React.ReactNode;
  onPress?: OnPressCallback;
};
export const Tag = ({
  children,
  ...props
}: TagProps) => {
  return (
    <Container
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled(PressableView)`
`;
