import React from 'react';
import styled from 'styled/styled';

import { TopmostProvider } from 'topmost/PopupProvider';

interface PageBody {
  children: React.ReactNode;
}
export const PageBody = ({
  children,
  ...props
}) => {
  return (
    <TopmostProvider>
      <Container
        {...props}
      >
        {children}
      </Container>
    </TopmostProvider>
  );
};

const Container = styled.View`
`;
